import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "mobx-react"
import { observable, reaction } from "mobx"
import {
    onSnapshot,
    onAction,
    onPatch,
    applySnapshot,
    applyAction,
    applyPatch,
    getSnapshot
} from "mobx-state-tree"

import createRouter from "./utils/router"
import App from "./components/App"
import "./index.css"

import { NbaGeneralStore } from "./stores/NbaGeneralStore"

const fetcher = url => window.fetch(url).then(response => response.json())
const nba = NbaGeneralStore.create(
    {},
    {
        fetch: fetcher,
        alert: m => console.log(m) // Noop for demo: window.alert(m)
    }
)

const history = {
    snapshots: observable.array([], { deep: false }),
    actions: observable.array([], { deep: false }),
    patches: observable.array([], { deep: false })
}

/**
 * Rendering
 */
ReactDOM.render(
    <Provider nba={nba} history={history}>
        <App />
    </Provider>,
    document.getElementById("root")
)

/**
 * Routing
 */

reaction(
    () => nba.view.currentUrl,
    path => {
        if (window.location.pathname !== path) window.history.pushState(null, null, path)
    }
)

const router = createRouter({
    "/team/:teamId": ({ teamId }) => nba.view.openTeamPagebyId(teamId),
    "/cart": nba.view.openCartPage,
    "/nba": nba.view.openNbaPage,
    "/teams": nba.view.openTeamsPage,
    "/": nba.view.openTeamsPage
})

window.onpopstate = function historyChange(ev) {
    if (ev.type === "popstate") router(window.location.pathname)
}

router(window.location.pathname)

// ---------------

window.nba = nba // for playing around with the console

/**
 * Poor man's effort of "DevTools" to demonstrate the api:
 */

let recording = false // supress recording history when replaying

onSnapshot(
    nba,
    s =>
        recording &&
        history.snapshots.unshift({
            data: s,
            replay() {
                recording = false
                applySnapshot(nba, this.data)
                recording = true
            }
        })
)
onPatch(
    nba,
    s =>
        recording &&
        history.patches.unshift({
            data: s,
            replay() {
                recording = false
                applyPatch(nba, this.data)
                recording = true
            }
        })
)
onAction(
    nba,
    s =>
        recording &&
        history.actions.unshift({
            data: s,
            replay() {
                recording = false
                applyAction(nba, this.data)
                recording = true
            }
        })
)

// add initial snapshot
history.snapshots.push({
    data: getSnapshot(nba),
    replay() {
        // TODO: DRY
        recording = false
        applySnapshot(nba, this.data)
        recording = true
    }
})

import { types, getEnv } from "mobx-state-tree"

import { ViewStore } from "./ViewStore"
import { NbaStore } from "./NbaStore"
import { TeamStore } from "./TeamStore"
import { PlayerStore } from "./PlayerStore"
import { WSAEWOULDBLOCK } from "constants";
export const NbaGeneralStore = types
    .model("NbaGeneralStore", {
        nbaStore: types.optional(NbaStore, {
            nba: {}
        }),
        playerStore: types.optional(PlayerStore, {
            players: {}
        }),
        teamStore: types.optional(TeamStore, {
            teams: {}
        }),
        view: types.optional(ViewStore, {})
    })
    .views(self => ({
        get fetch() {
            return getEnv(self).fetch
        },
        get alert() {
            return getEnv(self).alert
        },
        get isLoading() {
            debugger
            return self.teamStore.isLoading
        },
        get teams() {
            return self.teamStore.teams
        },
        get players() {
            return self.playerStore.players
        },
        get sortedAvailableNba() {
            return self.playerStore.sortedAvailablePlayers
        },
        get getTeams(){
            return self.teamStore.getTeams
        },
        get stats(){
            debugger
            return self.nbaStore.sortedAvailableNba
        },

    }))
    .actions(self => ({
        afterCreate() {
            self.teamStore.loadBooks()
           
        },
         updatePlayers(teamId){
             debugger
             self.playerStore.loadBooks(teamId)
         },
         updatePlayerStats(playerId){
             self.nbaStore.loadBooks(playerId)
         }
    }))

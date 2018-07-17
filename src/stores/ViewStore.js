import { types, getParent } from "mobx-state-tree"

export const ViewStore = types
    .model({
        page: "teams",
        selectedTeamId: "",
        selectedPlayerId: ""
    })
    .views(self => ({
        get nba() {
            return getParent(self)
        },
        get isLoading() {
            return self.nba.isLoading
        },
        get currentUrl() {
            switch (self.page) {
                case "nba":
                    return "/nba"
                case "teams":
                    return "/teams"
                case "team":
                    return "/team/" + self.selectedTeamId
                default:
                    return "/404"
            }
        },
        get selectedTeam() {
            debugger
            return self.isLoading || !self.selectedTeamId
                ? null
                : self.shop.teams.get(self.selectedTeamId)
        },
        get selectedPlayer() {
            debugger
            return self.isLoading || !self.selectedPlayerId
                ? null
                : self.shop.players.get(self.selectedPlayerId)
        }
    }))
    .actions(self => ({
        openTeamPagebyId(id){
            debugger
            self.page = "team"
            self.selectedTeamId =id
            self.shop.updatePlayers(self.selectedTeamId)
        },
        openNbaPage() {
            self.page = "nba"
        },
        openPlayerPage(player) {
            debugger
            self.page = "player"
            self.selectedPlayerId = player.player_id.toString()
            self.shop.updatePlayerStats(self.selectedPlayerId)
        },
        openTeamsPage() {
            self.page = "teams"
            self.selectedTeamId =""
        },
        openTeamPage(book) {
            debugger
            self.page = "team"
            self.selectedTeamId =book.TEAM_ID.toString()
            self.shop.updatePlayers(self.selectedTeamId)
        }
    }))

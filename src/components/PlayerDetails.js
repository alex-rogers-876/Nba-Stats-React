import React from "react"
import { inject, observer } from "mobx-react"
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const styles = ({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

const PlayerDetails = inject("nba")(
    observer(({book, nba }) => (
<Paper className={styles.root} style={styles.root}>
      <Table className={styles.table} style={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell numeric>Age</TableCell>
            <TableCell numeric>Games Played</TableCell>
            <TableCell numeric>Games Started</TableCell>

            <TableCell numeric>Minutes</TableCell>
            <TableCell numeric>FG Made</TableCell>
            <TableCell numeric>FG Attempted</TableCell>
            <TableCell numeric>FG Percent</TableCell>
            <TableCell numeric>FG3 Made</TableCell>
            <TableCell numeric>FG3 Attempted</TableCell>
            <TableCell numeric>FG3 Percent</TableCell>
            <TableCell numeric>FT Made</TableCell>
            <TableCell numeric>FT Attempted</TableCell>
            <TableCell numeric>FT Percent</TableCell>
            <TableCell numeric>Off Rebounds</TableCell>
            <TableCell numeric>Def Rebounds</TableCell>
            <TableCell numeric>Rebounds</TableCell>
            <TableCell numeric>Assists</TableCell>
            <TableCell numeric>Steals</TableCell>
            <TableCell numeric>Blocks</TableCell>
            <TableCell numeric>Turnovers</TableCell>
            <TableCell numeric>Personal Fouls</TableCell>
            <TableCell numeric>Points per game</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          
          {nba.stats.map(n => {
            debugger
            return (
              <TableRow key={n.season_id}>
                <TableCell component="th" scope="row">
                  {n.team_abbreviation}
                </TableCell>
                <TableCell numeric>{n.player_age}</TableCell>
                <TableCell numeric>{n.gp}</TableCell>
                <TableCell numeric>{n.gs}</TableCell>
                <TableCell numeric>{n.min}</TableCell>
                <TableCell numeric>{n.fgm}</TableCell>
                <TableCell numeric>{n.fga}</TableCell>
                <TableCell numeric>{n.fg_pct}</TableCell>
                <TableCell numeric>{n.fg3m}</TableCell>
                <TableCell numeric>{n.fg3a}</TableCell>
                <TableCell numeric>{n.fg3_pct}</TableCell>
                <TableCell numeric>{n.ftm}</TableCell>
                <TableCell numeric>{n.fta}</TableCell>
                <TableCell numeric>{n.ft_pct}</TableCell>
                <TableCell numeric>{n.oreb}</TableCell>
                <TableCell numeric>{n.dreb}</TableCell>
                <TableCell numeric>{n.reb}</TableCell>
                <TableCell numeric>{n.ast}</TableCell>
                <TableCell numeric>{n.stl}</TableCell>
                <TableCell numeric>{n.blk}</TableCell>
                <TableCell numeric>{n.tov}</TableCell>
                <TableCell numeric>{n.pf}</TableCell>
                <TableCell numeric>{n.pts}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    ))
)

const PlayerEntry = inject("shop")(
    observer(({ book, shop }) => (
        <li>
            
           <a
                href={`/player/${book.player_id}`}
                onClick={e => {
                    debugger;
                    e.preventDefault()
                    shop.view.openPlayerPage(book.player_id)
                    return false
                }}
            >
            {book.player_id}
           <img src={book.photoUrl}/>
           </a>
        </li>
    ))
)

export default PlayerDetails

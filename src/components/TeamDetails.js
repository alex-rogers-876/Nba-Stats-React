import React from "react"
import { inject, observer } from "mobx-react"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 65,
      paddingTop: '56.25%', // 16:9
    },
  };
const PlayerList = inject("shop")(
    observer(({book, shop }) => (
<Grid container spacing={24}>
                {shop.sortedAvailableNba.map(book => <PlayerEntry key={book.player_id} book={book} />)}
</Grid>
    ))
)

const PlayerEntry = inject("shop")(
    observer(({ book, shop }) => (
        <Grid item md={3} sm={4} xs={12}>
        <Card className={""} style={styles.card}>
        <CardMedia
          className={""}
          style={styles.media}
          image={book.photoUrl}
          title={book.TEAM_ID}
        />
        <CardActions>
          <Button size="small" color="primary">
          <a
                href={`/player/${book.player_id}`}
                onClick={e => {
                    debugger;
                    e.preventDefault()
                    shop.view.openPlayerPage(book)
                    return false
                }}
            >

           </a>
          </Button>
        </CardActions>
      </Card>
          


        </Grid>

    ))
)

export default PlayerList

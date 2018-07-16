import React from "react"
import { observer, inject } from "mobx-react"
import { withStyles } from '@material-ui/core/styles';
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
const Team = inject("shop")(
    observer(({ shop }) => (
        <section className="Page-team">
<div className={"root"}>
      <Grid container spacing={24}>
                {shop.getTeams.map(book => <BookEntry key={book.TEAM_ID} book={book} />)}

  </Grid>
  </div>
        </section>
    ))
)

const BookEntry = inject("shop")(
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
                href={`/team/${book.TEAM_ID}`}
                onClick={e => {
                    debugger;
                    e.preventDefault()
                    shop.view.openTeamPage(book)
                    return false
                }}
            >
            Visit Team
           </a>
          </Button>
        </CardActions>
      </Card>
          


        </Grid>
    ))
)

export default Team
import React from "react";
import { observer, inject } from "mobx-react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CardGrid from "./CardGrid";
const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 65,
    paddingTop: "56.25%" // 16:9
  }
};
const Team = inject("nba")(
  observer(({ nba }) => (
    <section className="Page-team">
      <div className={"root"}>
        <Grid container spacing={24}>
          {nba.getTeams.map(book => (
            <CardGrid key={book.TEAM_ID} props={book} />
          ))}
        </Grid>
      </div>
    </section>
  ))
);
export default Team;

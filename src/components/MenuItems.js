import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import List from '@material-ui/core/List';
 class MailFolderListItems extends Component{

render(){
    const  nba  = this.props.nba
    return(
  <div>
      <List>
    <ListItem button onClick={e => {
                    debugger;
                    e.preventDefault()
                    nba.view.openTeamsPage()
                    return false
                }}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={"Teams"} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
    </List>
  </div>
    )
}
}
export default MailFolderListItems
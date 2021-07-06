import React, { useState } from "react";
// import { View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import addPosts from "../features/post/postSlice";
import { nanoid } from "@reduxjs/toolkit";

// import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  ListItemIcon,
} from "@material-ui/core";
import { Person as PersonIcon, Public as PublicIcon } from "@material-ui/icons";

import API, { graphqlOperation } from "@aws-amplify/api";
import Auth from "@aws-amplify/auth";

const CreatePost = () => {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  console.log(title);
  console.log(content);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        addPosts(
          { type: "post/postAdded" },
          {
            id: nanoid(),
            title,
            content,
          }
        )
      );

      setTitle("");
      setContent("");
    }
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem
          button
          selected={activeListItem === "global-timeline"}
          onClick={() => {
            Auth.currentAuthenticatedUser().then((user) => {
              history.push("/global-timeline");
            });
          }}
          key="global-timeline"
        >
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="Global Timeline" />
        </ListItem>
        <ListItem
          button
          selected={activeListItem === "profile"}
          onClick={() => {
            Auth.currentAuthenticatedUser().then((user) => {
              history.push("/" + user.username);
            });
          }}
          key="profile"
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem key="post-input-field">
          <ListItemText
            primary={
              <TextField
                error={isError}
                helperText={helperText}
                id="post-input"
                label="Type your post!"
                multiline
                rowsMax="8"
                variant="filled"
                value={value}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            }
          />
        </ListItem>
        <ListItem key="post-button">
          <ListItemText
            primary={
              <Button
                variant="contained"
                color="primary"
                disabled={isError}
                onClick={onPost}
                fullWidth
              >
                Post
              </Button>
            }
          />
        </ListItem>
        <ListItem key="logout">
          <ListItemText
            primary={
              <Button variant="outlined" onClick={signOut} fullWidth>
                Logout
              </Button>
            }
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default CreatePost;

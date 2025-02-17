import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import classes from "./profile.module.css";
import { width } from "@mui/system";
import { Link } from "@mui/material";
import { useState } from "react";
import HandleFollow from "./HandleFollow";

const FollowersPage = (props) => {
  const names = ["alex", "brian", "syd", "john", "jeremy", "ryan"];
 
  
 return (
    <div className={classes.MM}>
      {names.map((follower) => (
        <Stack direction="row" spacing={2} padding={0.6}>
          <Avatar className={classes.followersAvatar}
            sx={{ bgcolor: deepOrange[500], width: 40 }}
            src="/broken-image.jpg"
          ></Avatar>
          <Link   href="#" underline="hover">
            <div style={{ color: "black", marginTop:"1.5em"}}>{follower}</div>
          </Link>
          <div className={classes.followersButton}>
            <HandleFollow followers={props.followers} toggleFollowers={props.toggleFollowers}/>
          </div>
          
        </Stack>
         
      ))}
        
    </div>
    
  );
 
};

export default FollowersPage;

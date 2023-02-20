import { ChevronRightOutlined } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import { StyledDashListHeading } from "../dashboard.style";

type Props = {};

const UpcomingActivity = (props: Props) => {
  return (
    <ListItem
      alignItems="center"
      disablePadding
      style={{
        margin: "8px 0 24px 0",
      }}
    >
      <ListItemAvatar>
        <Avatar
          sx={{ width: 32, height: 32, margin: "0 auto" }}
          alt="Marshall"
          src="/images/users/1.png"
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <StyledDashListHeading>Clarice Technologies</StyledDashListHeading>
        }
      />
    </ListItem>
  );
};

export default UpcomingActivity;

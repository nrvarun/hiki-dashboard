import { ChevronRightOutlined } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import {
  StyledDashListDetail,
  StyledDashListHeading,
} from "../dashboard.style";

type Props = {};

const ClientItem = (props: Props) => {
  return (
    <ListItem alignItems="center">
      <ListItemAvatar>
        <Avatar
          sx={{ width: 32, height: 32, margin: "0 auto" }}
          alt="Clarice Technologies"
          src="/images/company/1.png"
        />
      </ListItemAvatar>
      <ListItemText
        primary={<StyledDashListHeading>Clarice</StyledDashListHeading>}
        secondary={
          <StyledDashListDetail>+ 91 98888 88888</StyledDashListDetail>
        }
      />
      <IconButton>
        <ChevronRightOutlined />
      </IconButton>
    </ListItem>
  );
};

export default ClientItem;
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import {
  StyledDashListDetail,
  StyledDashListHeading,
} from "../dashboard.style";
import {
  StyledReqstBody,
  StyledReqstDetail,
  StyledReqstHeader,
  StyledReqstWrapper,
} from "./leaverqst.style";

type Props = {};

const LeaveRequest = (props: Props) => {
  return (
    <ListItem
      alignItems="center"
      disablePadding
      style={{
        margin: "8px 0 24px 0",
      }}
    >
      <StyledReqstWrapper>
        <StyledReqstHeader>
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={6}>
              <Grid container alignItems="center">
                <Grid>
                  <ListItemAvatar>
                    <Avatar
                      sx={{ width: 32, height: 32, margin: "0 auto" }}
                      alt="Marshall"
                      src="/images/users/1.png"
                    />
                  </ListItemAvatar>
                </Grid>
                <Grid>
                  <ListItemText
                    primary={
                      <StyledDashListHeading>Adam</StyledDashListHeading>
                    }
                    secondary={
                      <StyledDashListDetail>
                        Customar Manager
                      </StyledDashListDetail>
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container alignItems="center">
                <Grid item xs={6} textAlign="center">
                  <Button variant="outlined" size="small">
                    reject
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" size="small">
                    Approve
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </StyledReqstHeader>
        <StyledReqstBody>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <StyledReqstDetail>
                Month :<span>5 Sep - 16 Sep</span>
              </StyledReqstDetail>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <StyledReqstDetail>
                Day :<span>10 Days</span>
              </StyledReqstDetail>
            </Grid>
          </Grid>
        </StyledReqstBody>
      </StyledReqstWrapper>
    </ListItem>
  );
};

export default LeaveRequest;

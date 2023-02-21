import {
  Avatar,
  Button,
  Divider,
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
  StyledReqstHeader,
  StyledReqstWrapper,
  StyledTimeDetail,
  StyledTimeList,
  StyledTimeWrapper,
} from "./timesheet.style";

type Props = {};

const TimeSheet = (props: Props) => {
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
            <Grid item xs={12}>
              <StyledTimeWrapper>
                <StyledTimeList>
                  <li>
                    <StyledTimeDetail>Timesheet</StyledTimeDetail>
                  </li>
                  <li>
                    <StyledTimeDetail>5 Aug</StyledTimeDetail>
                  </li>
                  <li>
                    <StyledTimeDetail>2 - 2:30 PM</StyledTimeDetail>
                  </li>
                  <li>
                    <StyledTimeDetail>30 min</StyledTimeDetail>
                  </li>
                </StyledTimeList>
              </StyledTimeWrapper>
            </Grid>
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
        <StyledReqstBody
          style={{
            paddingLeft: 0,
          }}
        >
          <Grid container alignItems="center">
            <Grid>
              <ListItemAvatar>
                <Avatar
                  sx={{ width: 32, height: 32, margin: "0 auto" }}
                  alt="Clarice Technologies"
                  src="/images/company/1.png"
                />
              </ListItemAvatar>
            </Grid>
            <Grid>
              <ListItemText
                primary={<StyledDashListDetail>For</StyledDashListDetail>}
                secondary={
                  <StyledDashListHeading>
                    Clarice Technologies
                  </StyledDashListHeading>
                }
              />
            </Grid>
          </Grid>
        </StyledReqstBody>
      </StyledReqstWrapper>
    </ListItem>
  );
};

export default TimeSheet;

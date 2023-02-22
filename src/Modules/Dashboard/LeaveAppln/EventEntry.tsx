import { Divider, Grid } from "@mui/material";
import {
  StyledTdyTimeHeading,
  StyledTdyTimeWrapper,
} from "./tdytimesheet.style";

type Props = {};

const EventEntry = (props: Props) => {
  return (
    <StyledTdyTimeWrapper>
      <Grid container>
        <Grid item xs={12}>
          <StyledTdyTimeHeading>Upcoming Holidays</StyledTdyTimeHeading>
        </Grid>
        <Grid item xs={6}>
          <p>Onam</p>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <p>8 Sep 2022</p>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <p>Gandhi Jayanti</p>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <p>2 Oct 2022</p>
        </Grid>
      </Grid>
    </StyledTdyTimeWrapper>
  );
};

export default EventEntry;

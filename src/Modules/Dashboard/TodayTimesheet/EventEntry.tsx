import { Divider, Grid } from "@mui/material";
import React from "react";
import { StyledTdyTimeWrapper } from "./tdytimesheet.style";

type Props = {};

const EventEntry = (props: Props) => {
  return (
    <StyledTdyTimeWrapper>
      <Grid container>
        <Grid item xs={6}>
          <p>Clarice Technologies</p>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <p>10 am - 12:30 pm</p>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <p>Clarice Technologies</p>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <p>10 am - 12:30 pm</p>
        </Grid>
      </Grid>
    </StyledTdyTimeWrapper>
  );
};

export default EventEntry;

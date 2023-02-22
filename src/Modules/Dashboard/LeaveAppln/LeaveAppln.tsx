import { Grid } from "@mui/material";
import DashboardCard from "components/DashboardCard";
import EventEntry from "./EventEntry";
import LeaveRqst from "./LeaveRqst";

type Props = {};

const LeaveAppln = (props: Props) => {
  return (
    <DashboardCard title="Leave Application">
      <Grid container>
        <Grid item xs={12} marginBottom={2}>
          <LeaveRqst />
        </Grid>
        <Grid item xs={12} marginTop={2}>
          <EventEntry />
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default LeaveAppln;

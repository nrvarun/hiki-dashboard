import { Grid } from "@mui/material";
import DashboardCard from "components/DashboardCard";
import EventEntry from "./EventEntry";
import NewTimeEvent from "./NewTimeEvent";

type Props = {};

const TodayTimesheet = (props: Props) => {
  return (
    <DashboardCard title="Today’s Timesheet">
      <Grid container marginTop={2}>
        <Grid item xs={12}>
          <EventEntry />
        </Grid>
        <Grid item xs={12}>
          <NewTimeEvent />
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default TodayTimesheet;

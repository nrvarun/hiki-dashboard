import { Grid } from "@mui/material";
import AppLayout from "Layout/AppLayout";

import Clients from "./Clients";
import Colleagues from "./Colleagues";
import Documents from "./Documents";
import Invoice from "./Invoice";
import Task from "./Task";
import UpcomingActivities from "./UpcomingActivities";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <AppLayout fluidHeader firstTimeUser={false}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Task />
        </Grid>
        <Grid item xs={4}>
          <Clients />
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Invoice />
            </Grid>
            <Grid item xs={12}>
              <Documents />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Colleagues />
        </Grid>
        <Grid item xs={4}>
          <UpcomingActivities />
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default Dashboard;

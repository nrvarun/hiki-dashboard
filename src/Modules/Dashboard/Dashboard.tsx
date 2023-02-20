import { Grid } from "@mui/material";
import DashboardCard from "components/DashboardCard";
import AppLayout from "Layout/AppLayout";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <AppLayout fluidHeader firstTimeUser={false}>
      <Grid>
        <Grid item xs={12}>
          <DashboardCard title="Task">ads</DashboardCard>
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default Dashboard;

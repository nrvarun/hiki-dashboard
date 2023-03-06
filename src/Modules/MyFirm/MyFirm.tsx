import { Grid } from "@mui/material";
import DashboardCard from "components/DashboardCard";

type Props = {};

const MyFirm = (props: Props) => {
  return (
    <DashboardCard title="My Firm">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          ---
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default MyFirm;

import { Grid, Link, List } from "@mui/material";
import DashboardCard from "components/DashboardCard";
import LeaveRequest from "./LeaveRequest";

type Props = {};

const LeaveRequests = (props: Props) => {
  return (
    <DashboardCard title="Leave Requests">
      <Grid container marginTop={4}>
        <Grid item xs={12}>
          <List sx={{ width: "100%" }} disablePadding>
            <LeaveRequest />
            <LeaveRequest />
          </List>
        </Grid>
        <Grid item xs={12} textAlign="right" marginTop={4}>
          <Link href="#" variant="subtitle2">
            +3 More Requests
          </Link>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default LeaveRequests;

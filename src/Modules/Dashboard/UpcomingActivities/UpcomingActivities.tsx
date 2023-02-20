import { Divider, Grid, Link, List } from "@mui/material";
import DashboardCard from "components/DashboardCard";
import {
  StyledDashCardSummary,
  StyledDashCardSummaryDetail,
  StyledDashCardSummaryTitle,
} from "../dashboard.style";
import UpcomingActivity from "./UpcomingActivity";

type Props = {};

const UpcomingActivities = (props: Props) => {
  return (
    <DashboardCard title="Upcoming Key Activities">
      <Grid container marginTop={4}>
        <Grid item xs={12}>
          <StyledDashCardSummaryDetail weight="500">
            GST Filling
          </StyledDashCardSummaryDetail>
        </Grid>
        <Grid item xs={12}>
          <List sx={{ width: "100%" }} disablePadding>
            <UpcomingActivity />
            <UpcomingActivity />
          </List>
        </Grid>
        <Grid item xs={12} textAlign="right" marginTop={4}>
          <Link href="#" variant="subtitle2">
            +3 More Activities
          </Link>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default UpcomingActivities;

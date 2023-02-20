import { Divider, Grid, Link, List } from "@mui/material";
import DashboardCard from "components/DashboardCard";
import {
  StyledDashCardSummary,
  StyledDashCardSummaryDetail,
  StyledDashCardSummaryTitle,
} from "../dashboard.style";
import ClientItem from "./ColleagueItem";

type Props = {};

const Colleagues = (props: Props) => {
  return (
    <DashboardCard
      title="Colleagues"
      action={
        <Link href="#" variant="subtitle2">
          Add Colleague
        </Link>
      }
    >
      <StyledDashCardSummary>
        <Grid container spacing={2}>
          <Grid item xs={3} textAlign="center">
            <StyledDashCardSummaryTitle size="20px">
              03
            </StyledDashCardSummaryTitle>
            <StyledDashCardSummaryDetail>Admin</StyledDashCardSummaryDetail>
          </Grid>
          <Grid item xs={3} textAlign="center">
            <StyledDashCardSummaryTitle size="20px">
              12
            </StyledDashCardSummaryTitle>
            <StyledDashCardSummaryDetail>Leads</StyledDashCardSummaryDetail>
          </Grid>
          <Grid item xs={3} textAlign="center">
            <StyledDashCardSummaryTitle size="20px">
              24
            </StyledDashCardSummaryTitle>
            <StyledDashCardSummaryDetail>Juniors</StyledDashCardSummaryDetail>
          </Grid>
          <Grid item xs={3} textAlign="center">
            <StyledDashCardSummaryTitle size="20px">
              40
            </StyledDashCardSummaryTitle>
            <StyledDashCardSummaryDetail>Interns</StyledDashCardSummaryDetail>
          </Grid>
        </Grid>
      </StyledDashCardSummary>
      <Grid container marginTop={4}>
        <Grid item xs={12}>
          <StyledDashCardSummaryDetail weight="500">
            New Joinees
          </StyledDashCardSummaryDetail>
        </Grid>
        <Grid item xs={12}>
          <List sx={{ width: "100%" }} disablePadding>
            <ClientItem />
            <Divider variant="inset" component="li" />
            <ClientItem />
          </List>
        </Grid>
        <Grid item xs={12} textAlign="right" marginTop={4}>
          <Link href="#" variant="subtitle2">
            +3 More Colleagues
          </Link>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default Colleagues;

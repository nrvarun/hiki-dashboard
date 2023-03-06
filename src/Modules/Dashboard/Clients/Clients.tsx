import { Divider, Grid, Link, List } from "@mui/material";
import DashboardCard from "components/DashboardCard";
import { NavLink } from "react-router-dom";
import {
  StyledDashCardSummary,
  StyledDashCardSummaryDetail,
  StyledDashCardSummaryTitle,
} from "../dashboard.style";
import ClientItem from "./ClientItem";

type Props = {};

const Clients = (props: Props) => {
  return (
    <DashboardCard
      title="Clients"
      action={
        <NavLink to="/add-client">
          <Link href="#" variant="subtitle2">
            Add Client
          </Link>
        </NavLink>
      }
    >
      <StyledDashCardSummary>
        <Grid container>
          <Grid item xs={4} textAlign="center">
            <StyledDashCardSummaryTitle>521</StyledDashCardSummaryTitle>
            <StyledDashCardSummaryDetail>Companies</StyledDashCardSummaryDetail>
          </Grid>
          <Grid item xs={4}>
            <Divider
              style={{
                width: 2,
                margin: "0 auto",
              }}
              orientation="vertical"
              variant="middle"
            />
          </Grid>
          <Grid item xs={4} textAlign="center">
            <StyledDashCardSummaryTitle>12</StyledDashCardSummaryTitle>
            <StyledDashCardSummaryDetail>
              Individuals
            </StyledDashCardSummaryDetail>
          </Grid>
        </Grid>
      </StyledDashCardSummary>
      <Grid container marginTop={4}>
        <Grid item xs={12}>
          <StyledDashCardSummaryDetail weight="500">
            Recently Added Clients
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
            +3 More Clients
          </Link>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default Clients;

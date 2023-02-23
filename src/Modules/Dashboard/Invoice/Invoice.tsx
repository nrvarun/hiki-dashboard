import { Grid, LinearProgress, Link } from "@mui/material";
import DashboardCard from "components/DashboardCard";

import {
  StyledDashCardSummary,
  StyledDashCardSummaryDetail,
  StyledProgressBar,
} from "../dashboard.style";

type Props = {};

const Invoice = (props: Props) => {
  return (
    <DashboardCard
      title="Invoice"
      action={
        <Link href="#" variant="subtitle2">
          Raise Invoice
        </Link>
      }
    >
      <StyledDashCardSummary>
        <Grid container>
          <Grid item xs={6}>
            <StyledDashCardSummaryDetail>
              Total Invoices
            </StyledDashCardSummaryDetail>
          </Grid>

          <Grid item xs={6} textAlign="right">
            <StyledDashCardSummaryDetail weight="700">
              521
            </StyledDashCardSummaryDetail>
          </Grid>
          <Grid item xs={12}>
            <StyledProgressBar
              variant="determinate"
              value={90}
              bgcolor="rgb(19, 161, 126, 0.08)"
              fillcolor="rgb(19, 161, 126, 1)"
            />
          </Grid>
        </Grid>
        <Grid container marginTop={1}>
          <Grid item xs={6}>
            <StyledDashCardSummaryDetail>Unpaid</StyledDashCardSummaryDetail>
          </Grid>

          <Grid item xs={6} textAlign="right">
            <StyledDashCardSummaryDetail weight="700">
              12
            </StyledDashCardSummaryDetail>
          </Grid>
          <Grid item xs={12}>
            <StyledProgressBar
              variant="determinate"
              value={20}
              bgcolor="rgba(236, 65, 118, 0.08)"
              fillcolor="#EC4176"
            />
          </Grid>
        </Grid>
      </StyledDashCardSummary>
      <Grid container marginTop={2}>
        <Grid item xs={6}>
          <StyledDashCardSummaryDetail>
            Total Pending Amount
          </StyledDashCardSummaryDetail>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <StyledDashCardSummaryDetail color="#EC4176" weight="700" size="18px">
            Rs 3,54,000
          </StyledDashCardSummaryDetail>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default Invoice;

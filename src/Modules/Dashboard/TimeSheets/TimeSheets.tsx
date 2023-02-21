import { Grid, List } from "@mui/material";
import DashboardCard from "components/DashboardCard";
import TimeSheet from "./TimeSheet";
import { StyledTimeSheetList } from "./timesheet.style";

type Props = {};

const TimeSheets = (props: Props) => {
  return (
    <DashboardCard title="Leave Requests">
      <Grid container marginTop={4}>
        <Grid item xs={12}>
          <StyledTimeSheetList disablePadding>
            <TimeSheet />
            <TimeSheet />
          </StyledTimeSheetList>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default TimeSheets;

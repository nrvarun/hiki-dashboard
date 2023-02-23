import { Grid, Link } from "@mui/material";
import DashboardCard from "components/DashboardCard";
import {
  StyledTaskBarSummary,
  StyledTaskSummary,
  StyledTasksWrapper,
} from "./task.style";
import TaskBar from "./TaskBar";

type Props = {};

let readings = [
  {
    name: "completed",
    value: 12,
    total: 50,
    color: "#44A26C",
  },
  {
    name: "in progress",
    value: 22,
    total: 50,
    color: "#F4D567",
  },
  {
    name: "pending",
    value: 16,
    total: 50,
    color: "#EB5757",
  },
];

const Task = (props: Props) => {
  return (
    <DashboardCard
      title="Task"
      action={
        <Link href="#" variant="subtitle2">
          Create Task
        </Link>
      }
    >
      <StyledTasksWrapper>
        <Grid container>
          <Grid item xs={12} marginBottom={1}>
            <TaskBar readings={readings} />
          </Grid>
          <Grid item xs={6}>
            <StyledTaskBarSummary>
              <span>50 Tasks</span> Total
            </StyledTaskBarSummary>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <StyledTaskBarSummary color="#EB5757">
              <span>16 Tasks</span> Pending
            </StyledTaskBarSummary>
          </Grid>
        </Grid>
        <StyledTaskSummary>
          🙌 You have completed <span>12 Tasks</span>
        </StyledTaskSummary>
      </StyledTasksWrapper>
    </DashboardCard>
  );
};

export default Task;

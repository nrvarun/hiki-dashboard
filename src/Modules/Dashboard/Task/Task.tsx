import { Link } from "@mui/material";
import DashboardCard from "components/DashboardCard";

type Props = {};

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
      <img
        src="/images/tasks.png"
        alt="tasks summary"
        style={{
          width: "100%",
        }}
      />
    </DashboardCard>
  );
};

export default Task;

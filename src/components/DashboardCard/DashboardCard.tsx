import { Card, CardContent, CardHeader } from "@mui/material";

type Props = {
  title: string;
  children: React.ReactNode;
};

const DashboardCard = ({ title, children }: Props) => {
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default DashboardCard;

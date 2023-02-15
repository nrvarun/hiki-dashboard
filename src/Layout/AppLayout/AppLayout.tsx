import Header from "components/Header";

import {
  StyledAppDrawerBody,
  StyledAppDrawer,
  StyledAppDrawerHeader,
  StyledAppLayoutWrapper,
  StyledAppNavItem,
  StyledAppNavList,
  StyledAppBody,
} from "./applayout.style";

import { Divider } from "@mui/material";
import NavItem from "./NavItem";

type Props = {
  fluidHeader: boolean;
  firstTimeUser: boolean;
  children?: React.ReactNode;
};

const PRIMARY_NAV = [
  {
    id: 1,
    label: "Dashboard",
    icon: "/images/icons/nav/dashboard.svg",
    counter: 0,
  },
  {
    id: 2,
    label: "My Firm",
    icon: "/images/icons/nav/firm.svg",
    counter: 0,
  },
  {
    id: 3,
    label: "Clients",
    icon: "/images/icons/nav/clients.svg",
    counter: 0,
  },
  {
    id: 4,
    label: "Messages",
    icon: "/images/icons/nav/messages.svg",
    counter: 16,
  },
  {
    id: 5,
    label: "Tasks",
    icon: "/images/icons/nav/tasks.svg",
    counter: 0,
  },
  {
    id: 6,
    label: "Timesheet",
    icon: "/images/icons/nav/timesheet.svg",
    counter: 0,
  },
  {
    id: 7,
    label: "Invoices",
    icon: "/images/icons/nav/invoices.svg",
    counter: 0,
  },
  {
    id: 8,
    label: "Documents",
    icon: "/images/icons/nav/documents.svg",
    counter: 0,
  },
  {
    id: 9,
    label: "News",
    icon: "/images/icons/nav/news.svg",
    counter: 0,
  },
  {
    id: 10,
    label: "Settings",
    icon: "/images/icons/nav/settings.svg",
    counter: 0,
  },
  {
    id: 11,
    label: "Logout",
    icon: "/images/icons/nav/logout.svg",
    counter: 0,
  },
];

const AppLayout = ({ fluidHeader, firstTimeUser, children }: Props) => {
  return (
    <StyledAppLayoutWrapper>
      <StyledAppDrawer>
        <StyledAppDrawerHeader>
          <img src="/images/logo.svg" alt="hiki" />
        </StyledAppDrawerHeader>
        <StyledAppDrawerBody>
          <StyledAppNavList>
            {PRIMARY_NAV.slice(0, 3).map((nav, index) => (
              <li key={nav.id}>
                <NavItem
                  icon={nav.icon}
                  title={nav.label}
                  counter={nav.counter}
                />
              </li>
            ))}
          </StyledAppNavList>
          <Divider />
          <StyledAppNavList>
            {PRIMARY_NAV.slice(3, 9).map((nav, index) => (
              <li key={nav.id}>
                <NavItem
                  icon={nav.icon}
                  title={nav.label}
                  counter={nav.counter}
                />
              </li>
            ))}
          </StyledAppNavList>
          <Divider />
          <StyledAppNavList>
            {PRIMARY_NAV.slice(9).map((nav, index) => (
              <li key={nav.id}>
                <NavItem
                  icon={nav.icon}
                  title={nav.label}
                  counter={nav.counter}
                />
              </li>
            ))}
          </StyledAppNavList>
        </StyledAppDrawerBody>
      </StyledAppDrawer>
      <Header fullWidth={fluidHeader} firstTimeUser={firstTimeUser} />
      <StyledAppBody>{children}</StyledAppBody>
    </StyledAppLayoutWrapper>
  );
};

export default AppLayout;

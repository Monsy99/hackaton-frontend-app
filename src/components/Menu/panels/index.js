import { Button, ButtonImg, PanelWrapper } from "./styled";
import home from "../../../images/home.svg";
import homeWhite from "../../../images/homeWhite.svg";
import reservations from "../../../images/reservationsIcon.svg";
import reservationsWhite from "../../../images/reservationsWhite.svg";
import user from "../../../images/user.svg";
import services from "../../../images/services.svg";
import servicesWhite from "../../../images/servicesWhite.svg";
import insurance from "../../../images/insurance.svg";
import legal from "../../../images/legal.svg";
import settings from "../../../images/settings.svg";
import exit from "../../../images/exit.svg";
import { useHistory, useLocation } from "react-router";

export const BottomPanel = () => {
  return (
    <PanelWrapper>
      <Button>
        <ButtonImg src={legal} />
        Legal Note
      </Button>
      <Button>
        <ButtonImg src={settings} />
        Settings
      </Button>
      <Button>
        <ButtonImg src={exit} />
        Log Out
      </Button>
    </PanelWrapper>
  );
};

export const Panel = () => {
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;
  const isDashboard = path === "/dashboard";
  const isServices = path === "/services";
  const isReservations = path === "/reservations";
  return (
    <PanelWrapper>
      <Button
        active
        onClick={() => {
          history.push("/dashboard");
        }}
        reversed={isDashboard}
      >
        <ButtonImg src={isDashboard ? home : homeWhite} />
        Dashboard
      </Button>
      <Button
        active
        onClick={() => {
          history.push("/reservations");
        }}
        reversed={isReservations}
      >
        <ButtonImg src={isReservations ? reservations : reservationsWhite} />
        Reservations
      </Button>
      <Button>
        <ButtonImg src={user} />
        Users
      </Button>
      <Button
        active
        onClick={() => {
          history.push("/services");
        }}
        reversed={isServices}
      >
        <ButtonImg src={isServices ? services : servicesWhite} />
        Services
      </Button>
      <Button>
        <ButtonImg src={insurance} />
        Insurance
      </Button>
    </PanelWrapper>
  );
};

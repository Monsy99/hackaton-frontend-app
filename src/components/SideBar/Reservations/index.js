import React from "react";
import {
  ReservationsCard,
  Reservation,
  ReservationItem,
  Button,
} from "./styled";
import { Avator, Hr } from "../styled";
import avator from "../../../images/avator.svg";

const Reservations = () => {
  return (
    <ReservationsCard marginTop="10px">
      <Reservation>
        <Avator src={avator} width="20px" height="20px" />
        <ReservationItem>Mike Mayer</ReservationItem>
        <ReservationItem textAlign="right">12.03.2020</ReservationItem>
      </Reservation>
      <Hr />
      <Reservation>
        <Avator src={avator} width="20px" height="20px" />
        <ReservationItem>John Smith</ReservationItem>
        <ReservationItem textAlign="right">11.03.2020</ReservationItem>
      </Reservation>
      <Hr />
      <Reservation>
        <Avator src={avator} width="20px" height="20px" />
        <ReservationItem>Annah Doe</ReservationItem>
        <ReservationItem textAlign="right">13.04.2020</ReservationItem>
      </Reservation>
      <Hr />
      <Reservation>
        <ReservationItem />
        <Button padding="5px" width="100px" height="30px">
          Show all
        </Button>
      </Reservation>
    </ReservationsCard>
  );
};

export default Reservations;

import React from "react";
import {
  BottomComponentWrapper,
  TopServicesCard,
} from "../../BottomComponent/Specialities/styled";
import { Info } from "../../Dashboard/styled";
import { Avator, Title } from "../../SideBar/styled";
import character1 from "../../../images/character1.svg";
import character2 from "../../../images/character2.svg";
import character3 from "../../../images/character3.svg";
import character4 from "../../../images/character4.svg";
import character5 from "../../../images/character5.svg";

const BottomWrapper = () => {
  return (
    <BottomComponentWrapper>
      <div>
        <TopServicesCard marginTop="30px" width="110px">
          <Avator src={character1} width="100px" height="100px" />
          <Title color="black">Guided Trip</Title>
          <Info>Travel with your friends</Info>
        </TopServicesCard>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <TopServicesCard marginTop="30px" width="110px">
          <Avator src={character2} width="100px" height="100px" />
          <Title color="black">Consultation</Title>
          <Info>Schedule a doctor visit</Info>
        </TopServicesCard>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <TopServicesCard marginTop="30px" width="140px">
          <Avator src={character3} width="100px" height="100px" />
          <Title color="black">Knitting Lessons</Title>
          <Info>Learn how to craft clothes</Info>
        </TopServicesCard>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <TopServicesCard marginTop="30px" width="140px">
          <Avator src={character4} width="100px" height="100px" />
          <Title color="black">Dentist</Title>
          <Info>Schedule a tooth check</Info>
        </TopServicesCard>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <TopServicesCard marginTop="30px" width="140px">
          <Avator src={character5} width="100px" height="100px" />
          <Title color="black">Diet Consultant</Title>
          <Info>Start eating healthy</Info>
        </TopServicesCard>
      </div>
    </BottomComponentWrapper>
  );
};

export default BottomWrapper;

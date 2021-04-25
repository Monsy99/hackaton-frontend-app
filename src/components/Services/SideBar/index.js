import React from "react";
import {
  Avator,
  DailyReport,
  Logo,
  LogoContainer,
  SideBarContainer,
  Title,
} from "../../SideBar/styled";
import avator from "../../../images/avator.svg";
import closeButton from "../../../images/close-outline.svg";
import banner from "../../../images/banner.svg";
import option from "../../../images/option.svg";
import {
  Header,
  Input,
  Select,
  SelectWrapper,
  TextArea,
  Wrapper,
} from "./styled";
import { Image, Info } from "../../Dashboard/styled";
import { Button } from "../../SideBar/Reservations/styled";

const SideBar = () => {
  return (
    <SideBarContainer>
      <LogoContainer>
        <Logo />
        <Avator src={avator} width="45px" height="45px" />
      </LogoContainer>
      <DailyReport marginTop="50px">
        <Wrapper height="60px">
          <Title>Add a service</Title>
          <div style={{ position: "absolute", top: "180px", right: "40px" }}>
            <Avator src={closeButton} width="30px" height="30px" />
          </div>
        </Wrapper>
        <Wrapper>
          <Image src={banner} />
        </Wrapper>
        <Wrapper height="60px">
          <Header>Monthly Health Check</Header>
        </Wrapper>
        <Wrapper height="80px">
          <Info>Choose Host</Info>
          <SelectWrapper padding="5px">
            <Avator src={avator} width="30px" height="30px" />
            <Select>
              <option>Tom Cruise</option>
            </Select>
          </SelectWrapper>
        </Wrapper>
        <Wrapper height="160px">
          <Info>Description</Info>
          <TextArea>
            Join Dr. Tom Cruise in his mission to provide you with regular
            health checks during this year. This is the easiest way to keep
            control of your health.
          </TextArea>
        </Wrapper>
        <Wrapper height="80px">
          <Info>Set Price</Info>
          <Input placeholder="Set price" value="&#163;200" />
        </Wrapper>
        <Wrapper height="50px">
          <div style={{ display: "flex" }}>
            <Avator src={option} width="30px" height="30px" />
            <div style={{ paddingTop: "7px" }}>
              <Info>Event is free for premium users</Info>
            </div>
          </div>
        </Wrapper>
        <Wrapper height="50px">
          <Button width="100%" height="48px">
            Save event
          </Button>
        </Wrapper>
      </DailyReport>
    </SideBarContainer>
  );
};

export default SideBar;

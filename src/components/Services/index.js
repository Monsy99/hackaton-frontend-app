import { Greeting, Header, Image, Info, Input } from "../Dashboard/styled";
import { MainComponentWrapper } from "../MainComponentWrapper";
import { MainContainer } from "../MainContainer";
import { Menu } from "../Menu";
import { Container } from "../Container/index";
import servicePage from "../../images/service.svg";
import SideBar from "./SideBar";
import BottomWrapper from "./Bottom";
import { Label, LabelWrapper } from "./styled";

export const Services = () => {
  return (
    <MainContainer>
      <Menu />
      <MainComponentWrapper>
        <Header>
          <div>
            <Greeting>Welcome, Joanna!</Greeting>
            <Info>Metropolitan Hospital Panel</Info>
          </div>
          <Input placeholder="Search for service"></Input>
        </Header>
        <Container gridArea="dash">
          <Image width={"100%"} src={servicePage} />
        </Container>
        <LabelWrapper>
          <Label>
            <Info>All Services</Info>
          </Label>
          <Label textAlign="right">
            <Info>Show all</Info>
          </Label>
        </LabelWrapper>
        <BottomWrapper />
      </MainComponentWrapper>
      <SideBar />
    </MainContainer>
  );
};

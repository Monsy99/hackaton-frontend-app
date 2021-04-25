import { Container } from "../Container";
import { MainComponentWrapper } from "../MainComponentWrapper";
import { MainContainer } from "../MainContainer";
import { Menu } from "../Menu";
import fakechart from "../../images/Frame.svg";
import { Greeting, Header, Image, Info, Input } from "./styled";
import SideBar from "../SideBar/index";
import BottomComponent from "../BottomComponent/Specialities";

export const Dashboard = () => {
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
          <Image width="100%" src={fakechart} />
        </Container>
        <BottomComponent />
      </MainComponentWrapper>
      <SideBar />
    </MainContainer>
  );
};

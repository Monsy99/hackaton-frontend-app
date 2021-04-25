import { Greeting, Header, Info, Input } from "../Dashboard/styled";
import { MainComponentWrapper } from "../MainComponentWrapper";
import { MainContainer } from "../MainContainer";
import { Menu } from "../Menu";
import { Container } from "../Container";
import avator from "../../images/avator.svg";
import anna from "../../images/anna.svg";
import george from "../../images/george.svg";
import mike from "../../images/mike.svg";
import james from "../../images/james.svg";
import annas from "../../images/annas.svg";
import lizzy from "../../images/lizzy.svg";
import venue1 from "../../images/venue1.svg";
import venue2 from "../../images/venue2.svg";
import venue3 from "../../images/venue3.svg";
import venue4 from "../../images/venue4.svg";
import arrowDown from "../../images/arrowDown.svg";
import reservations from "../../images/Reservations.svg";
import {
  Avator,
  DailyReport,
  Figure,
  Hr,
  Logo,
  LogoContainer,
  ReportItem,
  SideBarContainer,
  Title,
} from "../SideBar/styled";
import {
  Reservation,
  ReservationItem,
  ReservationsCard,
} from "../SideBar/Reservations/styled";
import { Label } from "../Services/styled";
import { ArrowDown, Flex, TextAlignCenter, VenueCard } from "./styled";
import { BottomComponentWrapper } from "../BottomComponent/Specialities/styled";

export const Reservations = () => {
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
        <Container>
          <img alt="reservations table" width={"100%"} src={reservations}></img>
        </Container>
        <Flex>
          <Label>
            <Info>Your venues</Info>
          </Label>
          <Label textAlign="right">
            <Info>Show all</Info>
          </Label>
        </Flex>
        <BottomComponentWrapper>
          <VenueCard src={venue1}></VenueCard>
          <VenueCard src={venue2}></VenueCard>
          <VenueCard src={venue3}></VenueCard>
          <VenueCard src={venue4}></VenueCard>
        </BottomComponentWrapper>
      </MainComponentWrapper>
      <SideBarContainer>
        <LogoContainer>
          <Logo />
          <Avator src={avator} />
        </LogoContainer>
        <DailyReport
          marginTop="50px"
          alignItems="center"
          justifyConent="center"
        >
          <Title>Daily summary</Title>
          <Hr />
          <ReportItem>
            <Info>Appointments today</Info>
            <Figure color="black">223</Figure>
          </ReportItem>
          <Hr />
          <ReportItem>
            <Info>Average services revenue</Info>
            <Figure color="green">&#163; 378.12</Figure>
          </ReportItem>
          <Hr />
          <ReportItem>
            <Info>Registered users</Info>
            <Figure color="black">12 875</Figure>
          </ReportItem>
        </DailyReport>
        <ReservationsCard textAlign marginTop="10px">
          <Title textAlign>Revenue by employee</Title>
          <Reservation>
            <ReservationItem textAlign="left">Name</ReservationItem>
            <ReservationItem textAlign="right">Revenue</ReservationItem>
          </Reservation>
          <Hr />
          <Reservation>
            <Avator src={anna} width="20px" height="20px" />
            <ReservationItem>Anna Zoe</ReservationItem>
            <Figure small color="green">
              + &#163; 4432
            </Figure>
          </Reservation>
          <Hr />
          <Reservation>
            <Avator src={george} width="20px" height="20px" />
            <ReservationItem>George Joy</ReservationItem>
            <Figure small color="green">
              + &#163; 332
            </Figure>
          </Reservation>
          <Hr />
          <Reservation>
            <Avator src={mike} width="20px" height="20px" />
            <ReservationItem>Mike May</ReservationItem>
            <Figure small color="green">
              + &#163; 1299
            </Figure>
          </Reservation>
          <Hr />
          <Reservation>
            <Avator src={james} width="20px" height="20px" />
            <ReservationItem>James May</ReservationItem>
            <Figure small color="green">
              + &#163; 881
            </Figure>
          </Reservation>
          <Hr />
          <Reservation>
            <Avator src={annas} width="20px" height="20px" />
            <ReservationItem>Anna Smith</ReservationItem>
            <Figure small color="green">
              + &#163; 4432
            </Figure>
          </Reservation>
          <Hr />
          <Reservation>
            <Avator src={lizzy} width="20px" height="20px" />
            <ReservationItem>Lizzy Page</ReservationItem>
            <Figure small color="green">
              + &#163; 4009
            </Figure>
          </Reservation>
          <TextAlignCenter>
            <ArrowDown src={arrowDown}></ArrowDown>
          </TextAlignCenter>
        </ReservationsCard>
      </SideBarContainer>
    </MainContainer>
  );
};

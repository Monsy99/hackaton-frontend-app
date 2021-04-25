import senzen from "../../../images/senzen.svg";
import { UserAvatar, UserDetail, UserName, UserWrapper } from "./styled";

export const UserInfo = () => {
  return (
    <UserWrapper>
      <UserAvatar src={senzen} />
      <div>
        <UserName>SenZen</UserName>
        <UserDetail>Partner Panel</UserDetail>
      </div>
    </UserWrapper>
  );
};

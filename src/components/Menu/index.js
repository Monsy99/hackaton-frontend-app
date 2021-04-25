import { Panel, BottomPanel } from "./panels";
import { MenuWrapper } from "./styled";
import { UserInfo } from "./UserInfo";

export const Menu = () => {
  return (
    <MenuWrapper>
      <div>
        <UserInfo />
        <Panel />
      </div>
      <BottomPanel />
    </MenuWrapper>
  );
};

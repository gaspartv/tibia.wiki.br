import { ContainerStyled } from "../../styles/Global";
import { MainStyled } from "./styles";

interface iMainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: iMainProps) => {
  return (
    <MainStyled>
      <ContainerStyled>{children}</ContainerStyled>
    </MainStyled>
  );
};

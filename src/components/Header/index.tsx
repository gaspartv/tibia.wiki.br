import { ContainerStyled } from "../../styles/Global";
import { DivStyled, HeaderStyled, LinkStyled, NavStyled } from "./styles";

export const Header = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <DivStyled>
          <h1>TIBIA WIKI BR</h1>
          <NavStyled>
            <LinkStyled to="/"> Início <span></span></LinkStyled>
            <LinkStyled to="/loja"> Loja <span></span></LinkStyled>
            <LinkStyled to="/contato"> Contato <span></span></LinkStyled>
          </NavStyled>
        </DivStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
};

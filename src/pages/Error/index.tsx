import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ErrorStyled, LinkStyled } from "./styles";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

export const Error = () => {
  return (
    <>
      <Header />
      <ErrorStyled>
        <h1>Página não encontrada</h1>
        <h2>404</h2>
        <ArrowRightIcon />
        <LinkStyled to="/"> 
          Ir para página inicial
          <span></span>
        </LinkStyled>
        <ArrowLeftIcon />
      </ErrorStyled>
      <Footer />
    </>
  );
};

import { HomeStyled, SearchStyled } from "./styles";

import { BossBoosted } from "../../components/BossBoosted";
import { CreatureBoosted } from "../../components/CreatureBoosted";
import { DreamScarBoss } from "../../components/DreamScarBoss";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Rashid } from "../../components/Rashid";
import { SearchFast } from "../../components/SearchFast";

export const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <HomeStyled>
          <section>
            <Rashid />
            <CreatureBoosted />
            <BossBoosted />
            <DreamScarBoss />
          </section>
          <SearchStyled>
            <SearchFast />
          </SearchStyled>
        </HomeStyled>
      </Main>
      <Footer />
    </>
  );
};

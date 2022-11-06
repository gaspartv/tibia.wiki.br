import { useState } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import {
  SectionBuyStyled,
  SectionSellStyled,
  SectionStoreStyled,
  StoreStyled,
} from "./styles";
import { ContainerStyled } from "../../styles/Global";

import sellTibiaCoins from "../../assets/sell.png";
import buyTibiaCoins from "../../assets/buy.png";

export const Store = () => {
  const [renderSell, setRenderSell] = useState(false);
  const [renderBuy, setRenderBuy] = useState(false);

  const sellRender = () => {
    setRenderSell(true);
    setRenderBuy(false);
    console.log("sell");
  };

  const buyRender = () => {
    setRenderSell(false);
    setRenderBuy(true);
    console.log("buy");
  };

  return (
    <>
      <Header />
      <StoreStyled>
        <ContainerStyled>
          <SectionStoreStyled>
            <ul>
              <li onClick={() => sellRender()}>
                <img src={sellTibiaCoins} alt="Vender Tibia Coins" />
              </li>
              <li onClick={() => buyRender()}>
                <img src={buyTibiaCoins} alt="Comprar Tibia Coins" />
              </li>
            </ul>
          </SectionStoreStyled>
          {renderSell && <SectionSellStyled>SELL</SectionSellStyled>}
          {renderBuy && (
            <SectionBuyStyled>
              <form>
                <h2>Tibia Coins</h2>
                <h3>Nome do personagem</h3>
                <input type="text" placeholder="Nome do personagem" />
                
                <input type="range" min="25" max="5000" list="tickmarks" />
                <datalist id="tickmarks">
                  <option value="25">25</option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">3000</option>
                  <option value="4000">4000</option>
                  <option value="5000">5000</option>
                </datalist>
                <button>Comprar</button>
              </form>
            </SectionBuyStyled>
          )}
        </ContainerStyled>
      </StoreStyled>
      <Footer />
    </>
  );
};

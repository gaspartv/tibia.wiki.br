import { useEffect, useState } from "react";
import { FcAbout } from "react-icons/fc";

import { getDreamScarBoss } from "../../api/tibialabs";
import Alptramun from "../../assets/dreamscar/Alptramun.gif";
import Izcandar_the_Banished from "../../assets/dreamscar/Izcandar_the_Banished.gif";
import Malofur_Mangrinder from "../../assets/dreamscar/Malofur_Mangrinder.gif";
import Maxxenius from "../../assets/dreamscar/Maxxenius.gif";
import Plagueroot from "../../assets/dreamscar/Plagueroot.gif";
import { DreamScarBossStyled } from "./styles";

export const DreamScarBoss = () => {
  const [dreamScarBoss, setDreamScarBoss] = useState("");

  useEffect(() => {
    const searchDreamScarBoss = async () => {
      const data = await getDreamScarBoss();
      setDreamScarBoss(`${data}`);
    };
    searchDreamScarBoss();
  }, []);

  return (
    <DreamScarBossStyled>
      <div>
        {dreamScarBoss === "Alptramun" && (
          <img src={Alptramun} alt={dreamScarBoss} />
        )}
        {dreamScarBoss === "Izcandar the Banished" && (
          <img src={Izcandar_the_Banished} alt={dreamScarBoss} />
        )}
        {dreamScarBoss === "Malofur Mangrinder" && (
          <img src={Malofur_Mangrinder} alt={dreamScarBoss} />
        )}
        {dreamScarBoss === "Maxxenius" && (
          <img src={Maxxenius} alt={dreamScarBoss} />
        )}
        {dreamScarBoss === "Plagueroot" && (
          <img src={Plagueroot} alt={dreamScarBoss} />
        )}
        <p>
          {dreamScarBoss}
          <FcAbout />
          <span>
            A cada server save, uma criatura é sorteada, durante esse tempo a
            criatura selecionada irá: Render mais pontos de experiência.
            <br />
            Carregar mais itens do que o normal.
            <br />
            Seu respawn terá uma taxa mais rápida (a taxa de respawn é duas
            vezes mais rápida do que o normal).
          </span>
        </p>
      </div>
    </DreamScarBossStyled>
  );
};

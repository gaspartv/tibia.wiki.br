import { useEffect, useState } from "react";
import { FcAbout } from "react-icons/fc";
import { getBoss } from "../../api/tibiadata";
import { BossBoostedStyled } from "./styles";

interface iBossBoosted {
  featured: boolean;
  image_url: string;
  name: string;
}

export const BossBoosted = () => {
  const [bossBoosted, setBossBoosted] = useState<iBossBoosted>(
    {} as iBossBoosted
  );

  useEffect(() => {
    const searchBossBoosted = async () => {
      const { boostable_bosses } = await getBoss();
      setBossBoosted(boostable_bosses.boosted);
    };
    searchBossBoosted();
  }, []);

  return (
    <BossBoostedStyled>
      <div>
        <img src={bossBoosted.image_url} alt="" />
        <p>
          {bossBoosted.name}
          <FcAbout />
          <span>
            A cada server save, um Boss Archfoe é sorteado, durante esse tempo o
            boss selecionado irá: <br />
            Aumentar a chance de drop dos itens equipáveis em 250%. <br />
            Fazer com que uma morte conte como x3 no Bosstiary.
          </span>
        </p>
      </div>
    </BossBoostedStyled>
  );
};

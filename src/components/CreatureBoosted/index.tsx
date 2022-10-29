import { useEffect, useState } from "react";
import { FcAbout } from "react-icons/fc";
import { getCreatures } from "../../api/tibiadata";
import { CreatureBoostedStyled } from "./styles";

interface iBoosted {
  featured: boolean;
  image_url: string;
  name: string;
  race: string;
}

export const CreatureBoosted = () => {
  const [boosted, setBoosted] = useState<iBoosted>({} as iBoosted);

  useEffect(() => {
    const searchBoosted = async () => {
      const { creatures } = await getCreatures();
      setBoosted(creatures.boosted);
    };
    searchBoosted();
  }, []);

  return (
    <CreatureBoostedStyled>
      <div>
        <span></span>
        <img src={boosted.image_url} alt="" />
        <p>
          {boosted.name}
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
        <span></span>
      </div>
    </CreatureBoostedStyled>
  );
};

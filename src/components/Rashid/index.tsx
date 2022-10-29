import { useEffect, useState } from "react";
import { FcAbout } from "react-icons/fc";

import rashidImg from "../../assets/rashid/rashid.gif";
import { getRashid } from "../../api/tibialabs";
import { RashidStyled } from "./styles";

export const Rashid = () => {
  const [rashid, setRashid] = useState("");

  useEffect(() => {
    const searchRashid = async () => {
      const viewRashid = await getRashid();
      setRashid(`${viewRashid}`);
    };
    searchRashid();
  }, []);

  return (
    <RashidStyled>
      <div>
        <img src={rashidImg} alt="" />
        <p data-title="Rashid é um NPC comerciante que compra vários itens valiosos, ele está sempre alternando entre sete cidades (01 por dia). Para conseguir negociar com ele, você deve completar a The Travelling Trader Quest.">
          {rashid}
          <FcAbout />
        </p>
      </div>
    </RashidStyled>
  );
};

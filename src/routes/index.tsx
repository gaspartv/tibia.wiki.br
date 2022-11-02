import { Route, Routes } from "react-router-dom";

import { Error } from "../pages/Error";
import { Home } from "../pages/Home";
import { Store } from "../pages/Store";
import { Contact } from "../pages/Contact";
import { Quests } from "../pages/Quests";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loja" element={<Store />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/quests" element={<Quests />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouterMain;

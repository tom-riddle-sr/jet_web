import { Route, Routes } from "react-router-dom";

import Mainpage from "./Mainpage/Mainpage/Mainpage";

import React_intro from "./Mainpage/React_intro/React_intro";

import UseState from "./Mainpage/Hooks/UseState/UseState";
import UseRef from "./Mainpage/Hooks/UseRef/UseRef";
import UseReducer from "./Mainpage/Hooks/UseReducer/UseReducer";
import UseEffect from "./Mainpage/Hooks/UseEffect/UseEffect";
import UseContext from "./Mainpage/Hooks/UseContext/UseContext";
import UseMemo from "./Mainpage/Hooks/UseMemo/UseMemo";
import UseCallback from "./Mainpage/Hooks/UseCallback/UseCallback";

import Clsx from "./Mainpage/Packages/Clsx/Clsx";
import Eslint from "./Mainpage/Packages/Eslint/Eslint";
import Git_embed from "./Mainpage/Packages/Git_embed/Git_embed";
import I18n from "./Mainpage/Packages/I18n/I18n";
import Material_UI from "./Mainpage/Packages/Material_UI/Material_UI";
import Pug from "./Mainpage/Packages/Pug/Pug";
import React_Router from "./Mainpage/Packages/React_Router/React_Router";
import Redux from "./Mainpage/Packages/Redux/Redux";
import Sass from "./Mainpage/Packages/Sass/Sass.js";
import Mock from "./Mainpage/Packages/Mock/Mock";
import Three from "./Mainpage/Packages/Three/Three";

import Command from "./Mainpage/Git/Command/Command";
import Page from "./Mainpage/Git/Page/Page";
import Gist from "./Mainpage/Git/Gist/Gist";

const Router1 = () => (
  <Routes>
    <Route path="/" element={<Mainpage />}>
      {/* http://localhost:3000/#/React/introduce */}
      <Route path="/React/introduce" element={<React_intro />} />
      <Route path="/Hooks/UseState" element={<UseState />} />
      <Route path="/Hooks/UseEffect" element={<UseEffect />} />
      <Route path="/Hooks/UseRef" element={<UseRef />} />
      <Route path="/Hooks/UseContext" element={<UseContext />} />
      <Route path="/Hooks/UseCallback" element={<UseCallback />} />
      <Route path="/Hooks/UseMemo" element={<UseMemo />} />
      <Route path="/Hooks/UseReducer" element={<UseReducer />} />
      <Route path="/Package/Eslint" element={<Eslint />} />
      <Route path="/Package/Sass" element={<Sass />} />
      <Route path="/Package/Clsx" element={<Clsx />} />
      <Route path="/Package/Material_UI" element={<Material_UI />} />
      <Route path="/Package/Mock" element={<Mock />} />
      <Route path="/Package/I18n" element={<I18n />} />
      <Route path="/Package/Three" element={<Three />} />
      <Route path="/Git/Command" element={<Command />} />
      <Route path="/Git/Page" element={<Page />} />
      <Route path="/Git/Gist" element={<Gist/>} />
    </Route>
  </Routes>
);

export default Router1;

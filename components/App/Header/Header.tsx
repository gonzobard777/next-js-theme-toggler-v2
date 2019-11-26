import './Header.less';
import React from "react";
import {AnchorButton} from "@blueprintjs/core";

export const Header: React.FC = () => (
  <header className="header">
    <div className="app__adaptive-container">
      <div className="header__logo">Logo</div>
      <div className="header__middle">middle</div>
      <div className="header__user">
        <AnchorButton
          href={'./login'}
          minimal={true}
          rightIcon="log-in"
        >Log in</AnchorButton>
      </div>
    </div>
  </header>
);

import React, {ReactElement} from "react";
import './Footer.less'
import {Button, Classes} from "@blueprintjs/core";
import classNames from "classnames";

export const Footer: React.FC<IFooterProps> = (props: IFooterProps) => {
  return (
    <footer className="footer">
      <div className="app__adaptive-container">
        <div className="footer__left">
          <p className={classNames('copyright', Classes.TEXT_SMALL)}>
            ©&nbsp;<b>D</b>o|<b>W</b>hile|<b>F</b>or|<b>E</b>ach, {new Date().getFullYear()}
          </p>
        </div>
        <div className="footer__middle">
          middle
        </div>
        <div className="footer__right">
          {props.themeTogglerElem}
          <Button minimal={true} icon="translate"/>
        </div>
      </div>
    </footer>
  );
};

interface IFooterProps {
  themeTogglerElem: ReactElement;
}

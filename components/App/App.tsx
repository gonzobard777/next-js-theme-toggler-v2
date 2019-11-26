import React, {useEffect, useState} from 'react';
import './App.less';
import {Header} from "./Header/Header";
import classNames from "classnames";
import {getStorageTheme, ThemeToggler} from "./ThemeToggler/ThemeToggler";
import {Footer} from "./Footer/Footer";
import {Main} from "./Main/Main";

export const App: React.FC = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  return (
    <div className={classNames('app', theme)}>
      <Header/>
      <Main/>
      <Footer
        themeTogglerElem={<ThemeToggler theme={theme} toggleFn={(nextTheme: string) => setTheme(nextTheme)}/>}
      />
    </div>
  );
};



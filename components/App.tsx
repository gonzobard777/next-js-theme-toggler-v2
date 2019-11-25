import * as React from "react";
import "./App.less";
import {AnchorButton} from "@blueprintjs/core";

export const App = () => {
  return (
    <div>Hello React into Next
    <AnchorButton href="https://blueprintjs.com/docs/#core" icon="airplane">blueprint</AnchorButton>
    </div>
  );
};

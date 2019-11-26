import '../components/App/Header/Header.less';
import React from "react";
import {Button} from "@blueprintjs/core";

export default () => (

  <div>

    <p>just test <Button intent={"warning"} onClick={() => window.history.back()}>Previous page</Button></p>
  </div>
);

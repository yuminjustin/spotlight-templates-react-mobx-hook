import React from "react";
import { useObserver, inject } from "mobx-react";
import Heads from "./head";
import List from "./list";
import Footer from "./foot";
import style from "B/assets/css/style.css";

const Demo = inject(
  "todos",
  "types"
)((props) => {
  return useObserver(() => (
    <div className={style.mainbox}>
      <h1>Mobx todo</h1>
      <Heads todos={props.todos} />
      <div className={style.listbox}>
        <List todos={props.todos} types={props.types} />
      </div>
      <Footer todos={props.todos} types={props.types} />
    </div>
  ));
});

export default Demo;

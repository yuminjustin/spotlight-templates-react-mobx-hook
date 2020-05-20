import React, { useRef } from "react";
import { useObserver } from "mobx-react";
import style from "B/assets/css/style.css";

const Heads = (props) => {
  const { todos } = props;
  const ipt = useRef(null);
  const all = useRef(null);

  const clickHandler = () => {
    let v = ipt.current.value;
    if (v) {
      todos.addTodo(v);
      ipt.current.value = "";
    }
  };

  const chooseHandler = () => todos.toggle();

  return useObserver(() => (
    <div className={style.addbox}>
      <label>
        <input
          type="checkbox"
          className={style.dbl}
          ref={all}
          onChange={() => chooseHandler()}
          checked={todos.chooseAll}
        />
        全选
      </label>
      <input type="text" placeholder="输入需要添加的文字" ref={ipt} />
      <button onClick={() => clickHandler()}>添加</button>
    </div>
  ));
};

export default Heads;

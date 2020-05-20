import React from "react";
import { useObserver, inject } from "mobx-react";
import style from "B/assets/css/style.css";

const Footer = inject(
  "todos",
  "types"
)((props) => {
  const { todos, types } = props;
  const showAll = () => {
    /* 查看所有 */
    types.type = 0;
  };

  const showNone = () => {
    /* 查看未选择 */
    types.type = 1;
  };

  const showChoose = () => {
    /* 查看已选择 */
    types.type = 2;
  };

  const deleteHandler = () => {
    todos.delete();
  };

  let c1 = types.type == 0 ? "active" : "",
    c2 = types.type == 1 ? "active" : "",
    c3 = types.type == 2 ? "active" : "";

  return useObserver(() => (
    <div className={style.last_info}>
      <p className={style.info}>{todos.noChoose}项未选择</p>
      <p className={style.choose_btn}>
        <span className={c1} onClick={() => showAll()}>
          所有
        </span>
        <span className={c2} onClick={() => showNone()}>
          未选
        </span>
        <span className={c3} onClick={() => showChoose()}>
          已选
        </span>
      </p>
      <button
        className={style.del}
        style=\{{ display: todos.active ? "initial" : "none" }}
        onClick={() => deleteHandler()}
      >
        删除选中项
      </button>
    </div>
  ));
});

export default Footer;

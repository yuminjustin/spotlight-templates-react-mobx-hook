import React, { useState } from "react";
import { useObserver } from "mobx-react";
import style from "B/assets/css/style.css";

const Item = (props) => {
  const [isEdit,setIsEdit] = useState(!1);
  const [editText,setIsEditText] = useState("");

  const editHandler = () => {
    setIsEdit(!0);
  };

  const cancelHandler = () => {
    setIsEdit(!1);
  };

  const handleChange = (event) => {
    setIsEditText(event.target.value)
  };

  const submitHandler = () => {
    if (editText) {
      props.todo.setTitle(editText);
    }
    cancelHandler();
  };

  const deleteHandler = () => {
    setIsEditText("")
    props.todo.destroy();
  };

  const chooseHandler = () => {
    props.todo.toggle();
  };

  let { todo } = props,
    hide = { display: isEdit ? "initial" : "none" },
    hide2 = Object.assign({}, hide, { marginRight: "8px" }),
    show = { display: isEdit ? "none" : "initial" },
    show2 = Object.assign({}, show, { marginRight: "8px" });

  return useObserver(() => (
    <li
      onDoubleClick={() => editHandler()}
      className={todo.completed ? style.selected : ""}
    >
      <input
        type="checkbox"
        className={style.dbl}
        style={show}
        onChange={() => chooseHandler()}
        checked={todo.completed}
      />
      <span className={style.dble} style={show}>
        {todo.title}
      </span>
      <input
        type="text"
        placeholder={todo.title}
        className={style.dbl}
        style={hide}
        value={editText}
        onChange={() => handleChange()}
      />
      <div className={style.operate}>
        <button style={show2} onClick={() => deleteHandler()}>
          删除
        </button>
        <button style={hide2} onClick={() => submitHandler()}>
          修改
        </button>
        <button style={hide} onClick={() => cancelHandler()}>
          取消
        </button>
      </div>
    </li>
  ));
};

export default Item;

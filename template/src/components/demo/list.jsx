import React from "react";
import { useObserver, inject } from "mobx-react";
import Item from "./item";

const List = inject(
  "todos",
  "types"
)((props) => {
  const { todos, types } = props;

  return useObserver(() =>
    todos.list.length === 0 ? (
      ""
    ) : (
      <ul>
        {todos.list
          .filter((todo) => {
            if (types.type == 2 && todo.completed) {
              return !0;
            }
            if (types.type == 1 && !todo.completed) {
              return !0;
            }
            if (types.type == 0) {
              return !0;
            }
          })
          .map((todo, key) => {
            return <Item todo={todo} key={key} />;
          })}
      </ul>
    )
  );
});

export default List;

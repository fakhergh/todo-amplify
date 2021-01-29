import React, { useCallback } from "react";

const styles = {
  todo: {
    marginBottom: 15,
  },
  todoName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  todoDescription: {
    marginBottom: 0,
  },
};

const TodoItem = function ({ item, onDelete }) {
  const onDeleteClick = useCallback(() => {
    typeof onDelete === "function" && onDelete(item.id);
  }, [onDelete, item.id]);

  return (
    <div style={styles.todo}>
      <p style={styles.todoName}>{item.name}</p>
      <p style={styles.todoDescription}>{item.description}</p>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
};

const TodoList = function ({ items = [], onItemDeleteClicked }) {
  return (
    <>
      {items.map((todo) => (
        <TodoItem key={todo.id} item={todo} onDelete={onItemDeleteClicked} />
      ))}
    </>
  );
};

export default TodoList;

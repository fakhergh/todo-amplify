import React, { useCallback } from "react";
import { Button, List, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const DeleteIcon = ({ id, onDelete }) => {
  const onDeleteClick = useCallback(() => {
    typeof onDelete === "function" && onDelete(id);
  }, [onDelete, id]);

  return (
    <Tooltip title="Delete">
      <Button
        type="default"
        shape="circle"
        onClick={onDeleteClick}
        icon={<DeleteOutlined />}
      />
    </Tooltip>
  );
};

const TodoList = function({ items = [], onItemDeleteClicked }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={item => (
        <List.Item
          actions={[<DeleteIcon id={item.id} onDelete={onItemDeleteClicked} />]}
        >
          <List.Item.Meta
            title={<span>{item.name}</span>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default TodoList;

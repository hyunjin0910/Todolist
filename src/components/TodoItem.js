import styled from "@emotion/styled";
import { Input, Button } from "antd";
import React from "react";
import { Edit2, Trash2, Square, CheckSquare } from "react-feather";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, updatePost } from "../features/todos/todoSlice";


let TodoItem = ({ data }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [changedTodo, setChangedTodo] = useState("");
  const handleCheck = () => {
    const completeData = [data.id, { todo: data.todo, isCompleted: !data.isCompleted }];
    dispatch(updatePost(completeData));
  };

  const handleChange = (e) => {
    setChangedTodo(e.target.value);
  };

  const saveChange = () => {
    const editData = [data.id, { todo: changedTodo, isCompleted: data.isCompleted }];
    dispatch(updatePost(editData));
    setIsEdit(!isEdit);
    setChangedTodo("");
  };

  const handleEdit = () => {
    setChangedTodo(data.todo);
    setIsEdit(!isEdit);
  };
  const handleDelete = () => {
    dispatch(deletePost(data.id));
  };
  return (
    <>
      <TodoWrapper>
        {data.isCompleted ? (
          <IconContainer>
            <CheckSquare onClick={handleCheck} />
          </IconContainer>
        ) : (
          <IconContainer>
            <Square onClick={handleCheck} />
          </IconContainer>
        )}
        <InputContainer>
          {isEdit ? (
            <Input
              value={changedTodo}
              style={{
                width: data.todo.length * 30,
              }}
              onChange={handleChange}
            />
          ) : (
            <span className={data.isCompleted ? "checked" : ""}>{data.todo}</span>
          )}
        </InputContainer>
        {isEdit ? (
          <ButtonContainer>
            <Button type="primary" onClick={saveChange}>
              제출
            </Button>
            <Button type="danger" onClick={handleEdit}>
              취소
            </Button>
          </ButtonContainer>
        ) : (
          <IconContainer>
            <Edit2 onClick={handleEdit} />
          </IconContainer>
        )}

        <IconContainer>
          <Trash2 onClick={handleDelete} />
        </IconContainer>
      </TodoWrapper>
    </>
  );
};
TodoItem = React.memo(TodoItem);
export default TodoItem;

const TodoWrapper = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const InputContainer = styled.div`
  width: 10rem;
  padding: 0.2rem 0;

  .checked {
    text-decoration: line-through;
  }
`;

const IconContainer = styled.div`
  padding: 0.1rem 0.4rem;
  cursor: pointer;
`;


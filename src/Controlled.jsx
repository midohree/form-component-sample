import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { debounce } from 'lodash';

const Input = ({ handleChange, value, count }) => {
  console.log("제어 컴포넌트__인풋");

  return (
    <InputContainer count={count}>
      <input
        type="text"
        name="nickname"
        onChange={handleChange}
        value={value}
        autoComplete="off"
      />
    </InputContainer>
  );
};

const Controlled = () => {
  const [nickname, setNickname] = useState("");
  const [count, setCount] = useState(0);

  function handleChange(e) {
    const { value } = e.target;
    setNickname(value);
    setCount(count + 1);
    debounceOnChange();
  }

  const debounceOnChange = debounce(() => {
    if (count === 0) return;
    setCount(0);
  }, 3000);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`nickname: ${nickname}`);
    setNickname("");
  }

  console.log("제어 컴포넌트__전체");

  return (
    <Container count={count}>
      <div>{count}</div>
      <h2>제어 컴포넌트</h2>
      <form onSubmit={handleSubmit}>
        <Input handleChange={handleChange} value={nickname} count={count} />
        <input type="submit" value="제출" />
      </form>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: background-color 1s;
  background-color: ${({ count }) => {
    if (count > 0 && count < 3) return 'green';
    if (count >= 3 && count < 7) return 'yellow';
    if (count >= 7 && count < 12) return 'orange';
    if (count >= 12) return 'red';

    return 'white';
  }}
`;

const InputContainer = styled.div`
  height: 30px;
  width: 300px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 1s;
  background-color: ${({ count }) => {
    if (count > 0 && count < 3) return 'green';
    if (count >= 3 && count < 7) return 'yellow';
    if (count >= 7 && count < 12) return 'orange';
    if (count >= 12) return 'red';

    return 'white';
  }}
`;
export default Controlled;

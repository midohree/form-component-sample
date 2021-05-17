import React, { useRef, forwardRef } from "react";
import styled from "styled-components";

const Input = forwardRef((props, ref) => {
  console.log("비제어 컴포넌트__인풋");

  return (
    <input type="text" name="nickname" ref={ref} autoComplete="off" />
  )
});

const Uncontrolled = () => {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`nickname: ${inputRef.current.value}`);
    inputRef.current.value = '';
  }

  console.log("비제어 컴포넌트__전체");

  return (
    <Container>
      <h2>비제어 컴포넌트</h2>
      <form onSubmit={handleSubmit}>
        <Input ref={inputRef} />
        <input type="submit" value="제출" />
      </form>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 50%;
  border-left: 1px solid #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Uncontrolled;

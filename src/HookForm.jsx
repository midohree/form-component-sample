import React from "react";
import styled from "styled-components";
import { useForm, useWatch } from "react-hook-form";

function IsolateReRender({ control }) {
  const nickname = useWatch({
    control,
    name: 'nickname',
    defaultValue: ''
  });

  console.log("REACT_HOOK FORM__인풋");

  return <div>{nickname}</div>;
}


const HookForm = () => {
  const { register, handleSubmit, control } = useForm();

  function onSubmit(data) {
    alert(data);
  }

  console.log("REACT_HOOK FORM__전체");

  return (
    <Container>
      <h2>React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" autoComplete="off" {...register('nickname')}/>
        <input type="submit" value="제출" />
      </form>
      <IsolateReRender control={control} />
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

export default HookForm;

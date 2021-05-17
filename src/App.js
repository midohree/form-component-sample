import styled from 'styled-components';

import Controlled from './Controlled';
import Uncontrolled from './Uncontrolled';
import HookForm from './HookForm';
import IsolateRender from './IsolateRender';

function App() {
  return (
    <Container>
      {/* <Controlled />
      <Uncontrolled />
      <HookForm /> */}
      <IsolateRender />
    </Container>
  );
}

const Container = styled.div`
  /* height: 100%;
  display: flex;
  width: 100%;
  align-items: center; */
`;

export default App;

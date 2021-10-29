import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
const App = () => {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  width: 960px;
  margin: 20px auto;
  border-radius: 27px;
  box-shadow: 0 0 12px 0 hsl(0deg 0% 48% / 45%);
}
`;
export default App;

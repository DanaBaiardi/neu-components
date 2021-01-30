import styled from "styled-components";

const NeuBody = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 24px;
`;
const NeuBodyComponent = ({ children }) => {
  return <NeuBody>{children}</NeuBody>;
};

export default NeuBodyComponent;

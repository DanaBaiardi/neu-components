import styled from "styled-components";

const NeuMasterContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.darkMode ? '#102A43' : '#F2F5F9' };
`;

const NeuMasterContainerComponent = ({ darkMode, children }) => {
  return <NeuMasterContainer darkMode ={darkMode}>
      {children}
  </NeuMasterContainer>;
};

export default NeuMasterContainerComponent;

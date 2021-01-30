import NeuMasterContainer from "./components/neu-master-container/NeuMasterContainer";
import NeuNavbar from './components/neu-navbar/NeuNavbar'
import NeuBody from './components/neu-body/NeuBody'

function App() {
  return (
    <>
      <NeuMasterContainer darkMode={false}>
        <NeuNavbar darkMode={false}></NeuNavbar>
        <NeuBody>
        </NeuBody>
      </NeuMasterContainer>
    </>
  );
}

export default App;

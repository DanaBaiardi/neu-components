import styled from 'styled-components'

const NeuNavbar = styled.div`
height: 70px;
width: 100%;
background-color: ${(props) => props.darkMode ? '#102A43' : '#F2F5F9' };
box-shadow:${(props) => props.darkMode ? '0px 4px 15px 3px rgba(0, 0, 0, 0.32);' : '0px 4px 15px 3px rgba(0, 0, 0, 0.08);' };
`
const NeuNavbarComponent = ({darkMode, children}) => {
    return (
        <NeuNavbar darkMode={darkMode}>{children}</NeuNavbar>
      );
}
 
export default NeuNavbarComponent;
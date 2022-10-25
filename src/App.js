import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import {useState} from 'react'
import TelaUsuarioCadastrado from './components/TelaUsuarioCadastrado/TelaUsuarioCadastrado'

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [tela, setTela] = useState(1)

  function renderizaTela() {
    if(tela ===1) {
      return <TelaLogin mudaTela={mudaTela} />
    } else if (tela ===2 ) {
      return <TelaCadastro mudaTela={mudaTela} telaFinal={telaFinal} />
    } else {
      return <TelaUsuarioCadastrado />
    }
  }

  const telaFinal = () => {
    setTela(3)
  }

  const mudaTela = () => {
    if(tela ===1) {
      setTela(2)
    }else if(tela ===2) {
      setTela(1)
    }
  }

  return (
    <MainContainer >
      <GlobalStyled />
      {renderizaTela()}
    </MainContainer>
  );
}

export default App;
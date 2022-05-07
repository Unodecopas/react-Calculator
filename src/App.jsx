import Wrapper from "./components/Wrapper"
import Screen from "./components/Screen"
import ButtonBox from "./components/ButtonBox"

const App = () => {
    return (
        <div className="App">
            <Wrapper>
                <Screen value='0' />
                <ButtonBox>
                    botones por aqui
                </ButtonBox>
            </Wrapper>
        </div>
    )
}

export default App
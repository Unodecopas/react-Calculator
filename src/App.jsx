import Wrapper from "./components/Wrapper"
import Screen from "./components/Screen"
import ButtonBox from "./components/ButtonBox"
import Button from './components/Button'

const App = () => {
    return (
        <div className="App">
            <Wrapper>
                <Screen value='0' />
                <ButtonBox>
                    <Button
                        className=""
                        value="0"
                        onClick={() => {
                            console.log('Button clicked')
                        }}
                    />
                </ButtonBox>
            </Wrapper>
        </div>
    )
}

export default App
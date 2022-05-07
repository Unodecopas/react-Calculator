import Wrapper from "./components/Wrapper"
import Screen from "./components/Screen"

const App = () => {
    return (
        <div className="App">
            <Wrapper>
                <Screen value='0' />
            </Wrapper>
        </div>
    )
}

export default App
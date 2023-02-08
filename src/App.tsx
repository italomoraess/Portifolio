import { Footers } from "./components/Footer"
import { Headers } from "./components/Header"
import { Home } from "./components/Home"
import { Skills } from "./components/Skills"
import { GlobalStyles } from "./styles/Global"

function App() {
  return (
    <>
      <GlobalStyles />
      <Headers />
      <Home />
      <Skills />
      <Footers />
    </>
  )
}

export default App

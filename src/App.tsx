import { About } from "./components/About"
import { Footers } from "./components/Footer"
import { Headers } from "./components/Header"
import { Home } from "./components/Home"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { GlobalStyles } from "./styles/Global"

function App() {
  return (
    <>
      <GlobalStyles />
      <Headers />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footers />
    </>
  )
}

export default App

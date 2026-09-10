import Home from './component/Pages/Home'
import About from './component/Pages/About'
import Skills from './component/Pages/Skills'
import Projects from './component/Pages/Projects'
import Contact from './component/Pages/Contact'
import Layout from './component/Layout/Layout'
function App(){
  return(
    <>
    <Layout>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
    </>
  )
}
export default App;
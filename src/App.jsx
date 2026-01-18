import Section from './components/Section'
import Hero from './components/Hero'
import Projects from './components/Projects'
import './App.css'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Section id="hero">
        <Hero />
      </Section>
      
      <Section id="projects" title="Projects">
        <Projects />
      </Section>

      <Section id="contact" title="Get In Touch">
        <Contact />
      </Section>
    </>
  )
}

export default App

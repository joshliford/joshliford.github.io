import Section from './components/Section'
import Hero from './components/Hero'
import Resume from './components/Resume'
import './App.css'

function App() {
  return (
    <>
      <Section id="hero">
        <Hero />
      </Section>
      <Section id="resume" title="Resume">
        <Resume />
      </Section>
    </>
  )
}

export default App

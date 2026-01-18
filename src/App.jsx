import Section from './components/Section'
import Hero from './components/Hero'
import Projects from './components/Projects'
import './App.css'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Section id="hero">
        <Hero />
      </Section>
      
      <Section id="projects" title="Projects">
        <Projects />
      </Section>

      <Section id="contact" title="Get In Touch">
        <Contact />
      </Section>
      <Footer />
    </div>
  )
}

export default App

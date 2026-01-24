import Section from './components/Section'
import Hero from './components/Hero'
import Projects from './components/Projects'
import './App.css'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="bg-[#1e293b] text-slate-100 font-[sans-serif]">
      <ScrollProgress />
      <Header />
      <Section id="hero">
        <Hero />
      </Section>

      <Section id="about" title="About Me">
        <About />
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

export default function NavBar() {
  return (
    <div className="flex flex-row">
      <nav>
        <ul className="flex flex-row gap-6">
          <li>
            <a href="#hero" className="hover:text-cyan-500 transition-colors">About Me</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-500 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-500 transition-colors">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

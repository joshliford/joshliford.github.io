export default function NavBar() {
  return (
    <div className="flex flex-row">
      <nav>
        <ul className="flex flex-row gap-6">
          <li>
            <a href="#hero">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

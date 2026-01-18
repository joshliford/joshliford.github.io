export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="space-y-2 mb-6">
        <h1 className="text-4xl">Josh Liford</h1>
        <h2 className="text-2xl">Jr. Full Stack Developer</h2>
      </div>
      <div className="space-y-4 max-w-prose">
        <p>
          Former emergency department nurse, currently working on a development
          team specializing in AI-assisted development workflows, building
          enterprise applications, and evaluating AI agents/tools to enhance
          team productivity while completing
          <a
            href="https://www.launchcode.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 ml-1 mr-1"
          >
            LaunchCode's
          </a>
          Full Stack Software Development bootcamp. Leveraging Spec-Driven
          Development workflows with
          <a
            href="https://github.com/github/spec-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 ml-1 mr-1"
          >
            Spec-Kit
          </a>
          to streamline development processes.
        </p>

        <p>
          Skilled in React and JavaScript for Frontend development. Learning
          Backend development with Java, Spring Boot, and MySQL.
        </p>

        <p>
          Outside of work I am a father of twin boys, I enjoy playing video
          games (
          <a
            href="https://store.steampowered.com/app/264710/Subnautica/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 mr-1"
          >
            Subnautica
          </a>
          and
          <a
            href="https://www.playstation.com/en-us/god-of-war/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 ml-1 mr-1"
          >
            God of War (2018)
          </a>
          are some of my personal favorites), I have 3 crazy dogs, I enjoy
          playing the guitar.
        </p>
      </div>
    </div>
  );
}

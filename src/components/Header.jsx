import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between max-w-6xl mx-auto px-16 py-8 gap-6">
        <h2 className="text-2xl italic hover:text-orange-400 transition-colors">
          <a href="#">JL</a>
        </h2>
        <NavBar />
      </div>
    </div>
  );
}

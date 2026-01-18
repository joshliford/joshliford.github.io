import NavBar from "./NavBar";

export default function Header() {
  return (
    <div>
      <div className="flex flex-row justify-between px-16 py-8">
        <h2 className="text-xl">
          <a href="#">JL</a>
        </h2>
        <NavBar />
      </div>
    </div>
  );
}

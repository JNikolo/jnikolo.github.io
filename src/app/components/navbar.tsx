export function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center>"></div>
      <div className="flex items-center space-x-4">
        <a href="/">Home</a>
        <a href="/about">Experience</a>
        <a href="/projects">Projects</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="btn bg-gray-600" type="button">
          Language
        </button>
        <button className="btn bg-gray-600" type="button">
          Ligth mode
        </button>
      </div>
    </div>
  );
}

export function NavLinks() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base">
      <button
        onClick={() => scrollToSection("home")}
        className="hover:text-emerald transition-colors"
      >
        Home
      </button>
      <button
        onClick={() => scrollToSection("experience")}
        className="hover:text-emerald transition-colors"
      >
        Experience
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className="hover:text-emerald transition-colors"
      >
        Projects
      </button>
    </div>
  );
}

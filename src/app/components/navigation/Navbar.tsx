"use client";
import { NavLinks } from "./NavLinks";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-4 bg-night/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Nav Links - centered */}
        <div className="w-full sm:w-1/3 flex justify-center">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}

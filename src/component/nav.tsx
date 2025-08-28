"use client";

import { Menu, X } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState<string>("home");

  const handleClick = (id: string) => {
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-b shadow-sm bg-gray-50 dark:bg-gray-900 fixed top-0 w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <div className="sm:text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              &lt;Omniya/&gt;
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              onClick={() => handleClick("home")}
              className={`text-lg px-3 py-2 font-medium transition-colors ${
                activeLink === "home"
                  ? "text-pink-500"
                  : "dark:text-gray-50 hover:text-blue-600"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => handleClick("about")}
              className={`text-lg px-3 py-2 font-medium transition-colors ${
                activeLink === "about"
                  ? "text-pink-500"
                  : "dark:text-gray-50 hover:text-blue-600"
              }`}
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => handleClick("skills")}
              className={`text-lg px-3 py-2 font-medium transition-colors ${
                activeLink === "skills"
                  ? "text-pink-500"
                  : "dark:text-gray-50 hover:text-blue-600"
              }`}
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => handleClick("projects")}
              className={`text-lg px-3 py-2 font-medium transition-colors ${
                activeLink === "projects"
                  ? "text-pink-500"
                  : "dark:text-gray-50 hover:text-blue-600"
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => handleClick("contact")}
              className={`text-lg px-3 py-2 font-medium transition-colors ${
                activeLink === "contact"
                  ? "text-pink-500"
                  : "dark:text-gray-50 hover:text-blue-600"
              }`}
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="mt-2 space-y-1 rounded-lg  px-2 pb-3 pt-2">
            <a
              href="#home"
              onClick={() => handleClick("home")}
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                activeLink === "home"
                  ? "text-pink-500"
                  : "dark:text-gray-50 hover:text-blue-600"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => handleClick("about")}
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                activeLink === "about"
                  ? "text-pink-500"
                  : "dark:text-gray-50 hover:text-blue-600"
              }`}
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => handleClick("skills")}
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                activeLink === "skills"
                  ? "text-pink-500"
                  : "dark:text-gray-50 text-gray-900"
              }`}
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => handleClick("projects")}
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                activeLink === "projects"
                  ? "text-pink-500"
                  : "dark:text-gray-50 hover:text-blue-600"
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => handleClick("contact")}
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                activeLink === "contact"
                  ? "text-pink-500"
                  : "dark:text-gray-50 hover:text-blue-600"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

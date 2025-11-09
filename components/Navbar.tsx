"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/modeToggle";

export default function Navbar() {
  return (
    <nav>
      <div className="max-w-[1536] w-full h-full flex items-center justify-between">
        <div className="logo">
          <Link href="/">
            <h1 className="text-xl font-black">Mehmed Khan</h1>
          </Link>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <ModeToggle />
          </li>
          <li>
            <Link href="/about" className="nav-links">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="nav-links">
              Projects
            </Link>
          </li>
          <li>
            <Button
              variant="secondary"
              size="lg"
              className="w-fit bg-red-500 hover:bg-red-600 cursor-pointer transition-all duration-300"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Contact Me
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

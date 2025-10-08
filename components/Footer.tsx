import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="w-full max-w-[1536] flex gap-5 py-20 mx-auto ">
        <address className="w-1/4 flex flex-col justify-center">
          lives in <a href="mailto:webmaster@example.com">Dhaka, Bangladesh</a>.
          <br />
          Visit us at:
          <br />
          Example.com
          <br />
          Box 564, Disneyland
          <br />
          USA
        </address>
        <ul className="w-1/4 flex flex-col items-center justify-center gap-4">
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
            <Link href="/projects" className="nav-links">
              Projects
            </Link>
          </li>
        </ul>
        <div className="w-1/4">
          <Link href="/">
            <h1 className="text-xl font-black">Mehmed Khan</h1>
          </Link>
        </div>
        <div className="w-1/4 flex flex-col items-center justify-center gap-8">
          <div className="w-full text-center">
            <h3 className="text-xl font-bold text-violet-500">
              Subscribe to my newslatter
            </h3>
            <p className="text-center text-gray-300 mt-2.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              mollitia voluptatem quam modi rerum
            </p>
          </div>

          <form
            action="#"
            className="w-full flex flex-col items-center gap-5 px-5"
          >
            <Input type="email" />
            <Button
              variant="secondary"
              className="w-fit bg-red-500 hover:bg-red-600 cursor-pointer transition-all duration-300"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <hr className="w-full" />
      <div className="w-full py-2 text-center">Copyright</div>
    </footer>
  );
}

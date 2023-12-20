import { Icons } from "./Icons";
import MaxWidthWraper from "./MaxWidthWraper";
import Link from "next/link";
import NavbarItems from "./NavbarItems";

export default function Navbar() {
  return (
    <div className="bg-white sticky top-0 z-50 inset-x-0 h-16 ">
      <header className="relative bg-white">
        <MaxWidthWraper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile Nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href={"/"}>
                  <Icons.logo className="w-10 h-10 text-blue-500" />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavbarItems />
              </div>
            </div>
          </div>
        </MaxWidthWraper>
      </header>
    </div>
  );
}

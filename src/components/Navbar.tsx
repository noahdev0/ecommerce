import { Icons } from "./Icons";
import MaxWidthWraper from "./MaxWidthWraper";
import Link from "next/link";
import NavbarItems from "./NavbarItems";
import { Ghost } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

export default function Navbar() {
  const user = null;
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
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      className={buttonVariants({ variant: "ghost" })}
                      href={"/sign-in"}
                    >
                      Sign in
                    </Link>
                  )}
                  {user ? null : (
                    <span
                      className="hidden h-6 w-px bg-gray-200"
                      aria-hidden="true"
                    />
                  )}
                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      className={buttonVariants({ variant: "ghost" })}
                      href={"/sign-up"}
                    >
                      Sign up
                    </Link>
                  )}
                  {user ? null : (
                    <span
                      className="hidden h-6 w-px bg-gray-200"
                      aria-hidden="true"
                    />
                  )}
                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="hidden h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWraper>
      </header>
    </div>
  );
}

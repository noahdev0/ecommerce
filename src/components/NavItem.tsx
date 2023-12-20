"use client";
import { PROUDCT_CATEGORIES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
type Category = (typeof PROUDCT_CATEGORIES)[number];
interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

export default function NavItem({
  category,
  handleOpen,
  isOpen,
  isAnyOpen,
}: NavItemProps) {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
          className="gap-1.5"
        >
          {category.lable}
          <ChevronDown
            className={cn("w-4 h-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
      {isOpen && (
        <div
          className={cn(
            "absolute inset-0 top-full text-sm text-muted-foreground",
            { "animate-in fade-in-10 slide-in-from-top-5 ": isOpen }
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow "
            aria-hidden="true"
          >
            <div className="relative bg-white">
              <div className="mx-auto max-w-7xl px-8">
                <div className="grid grid-cols-4 gap-x-8 gap-y10 py-16">
                  <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                    {category.features.map((feature, i) => (
                      <div
                        key={feature.name + i}
                        className="group relative text-base sm:text-sm"
                      >
                        <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 ">
                          <Image
                            src={feature.imageSrc}
                            fill
                            className="object-cover object-center"
                            alt={feature.name}
                          />
                        </div>
                        <Link
                          href={feature.href}
                          className="mt-6 block font-medium text-gray-900"
                        >
                          {feature.name}
                        </Link>
                        <p className="mt-2 text-sm text-gray-500">Shop Now</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

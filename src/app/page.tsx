import MaxWidthWraper from "@/components/MaxWidthWraper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownToLine, CheckCircle, Leaf, Sofa } from "lucide-react";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description: "Get your Room ready in hours",
  },
  {
    name: "grand quality",
    icon: CheckCircle,
    description:
      "Every asset is verified and rated by our team to ensure our hight quality standards",
  },
  {
    name: "Best price",
    icon: Leaf,
    description:
      "We work directly with the best manufacturers to offer you the best price",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWraper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl md:text-6xl">
            Your market place for high-quality
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Meuble <Sofa className=" text-green-600 inline-block" />
            </span>
          </h1>
          <p className="mt-5 text-lg max-w-prose text-muted-foreground sm:text-xl md:text-xl">
            Welcome to Kominal. every asset on our platform is verified and
            rated by our team and Our dear Clients.
          </p>
          <div className="flex flex-col  sm:flex-row gap-4 mt-6">
            <Link className={buttonVariants()} href="/products">
              Brows our products
            </Link>
            <Button variant={"ghost"}>Our quality promise &rarr;</Button>
          </div>
        </div>
        {/* TODO */}
      </MaxWidthWraper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWraper classNme="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk, i) => (
              <div
                key={perk.name + i}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900 ">
                    {perk.icon && <perk.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWraper>
      </section>
    </>
  );
}

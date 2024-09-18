import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Link from "next/link";
import { GraduationCap, Network, Search } from "lucide-react";
import getSession from '@/lib/getSession'
import { SignInButton } from "@/components/NavBar";
import { GetStartedButton } from "@/components/GetStartedButton";

const perks = [
  {
    name: "Networking",
    Icon: Network,
    description:
      "Place to meet like-minded people who go to (or graduated from) Clemson",
  },
  {
    name: "Transparency",
    Icon: Search,
    description:
      "This website is built of the idea of transparency things like compensation, years of experience, and major are all visible to see.",
  },
  {
    name: "Community",
    Icon: GraduationCap,
    description:
      "This website is meant to build a stronger feeling of community for those in their early career.",
  },
];

export default async function Home() {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-300 to-gray-200">
      <MaxWidthWrapper className="flex-grow flex flex-col items-center justify-center text-center">
        <section className="my-12">
          <h1 className="text-4xl font-bold mb-6 text-black">
            Welcome to Clemson Clear
          </h1>
          <p className="text-lg mb-12 text-gray-900">
            Connect with peers, explore job and internship opportunities, and
            see real data on compensation and experiences.
          </p>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="flex flex-col items-center text-center"
              >
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-orange-300 text-orange-800 mb-4">
                  <perk.Icon className="w-1/3 h-1/3" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-gray-700">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {user ? <div className="flex flex-col items-center space-y-4 mt-12">
            <Button>
              <Link href="/">Start Exploring</Link>
            </Button>
          </div> : 
          <div className="flex flex-col items-center space-y-4 mt-12">
            <GetStartedButton />
          </div>
          } 
        </section>
      </MaxWidthWrapper>
    </div>
  );
}



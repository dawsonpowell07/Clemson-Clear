import { LogIn } from "@/components/LogIn";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <MaxWidthWrapper className="flex-grow flex items-center justify-center">

      <LogIn />
      </MaxWidthWrapper>
    </div>
  )
}

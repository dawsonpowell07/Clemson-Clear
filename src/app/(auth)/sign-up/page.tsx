import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SignIn } from "@/components/SignUp";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <MaxWidthWrapper className="flex-grow flex items-center justify-center">

      <SignIn />
      </MaxWidthWrapper>
    </div>
  )
}

import { Metadata } from "next";
import ProfilePage from "./ProfilePage";
import { redirect } from "next/navigation";
import getSession from '@/lib/getSession'

export const metadata: Metadata = {
  title: "profile",
};

export default async function Page() {
    const session = await getSession()
    const user = session?.user

    if (!user){
        redirect("/api/auth/signin?callbackUrl=/settings")
    }
  return <ProfilePage/>;
}
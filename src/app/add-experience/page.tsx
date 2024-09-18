// /app/add-experience/page.tsx

import { Metadata } from "next";
import AddExperiencePage from "./AddExperiencePage";
import { redirect } from "next/navigation";
import getSession from '@/lib/getSession';

export const metadata: Metadata = {
  title: "Add Experience",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/add-experience");
  }

  return <AddExperiencePage />;
}

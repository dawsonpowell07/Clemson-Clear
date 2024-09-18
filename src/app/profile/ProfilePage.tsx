import Image from "next/image";
import React from "react";
import avatarPlaceholder from "@/assets/avatar_placeholder.png";
import { redirect } from "next/navigation";
import { User } from "next-auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProfileProps {
  user: User;
}

const mockExperiences = [
  "Internship at Company A",
  "Research Assistant at Lab B",
  "Volunteer at Organization C",
];

export default async function ProfilePage({ user }: ProfileProps) {
  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <div className="flex flex-col items-center">
          <Image
            src={user.image || avatarPlaceholder}
            alt="User profile picture"
            width={100}
            height={100}
            className="aspect-square rounded-full bg-background object-cover"
          />
          <h1 className="text-2xl font-semibold mt-4">{user.name}</h1>
          <p className="text-gray-600">{user.major}</p>
          <p className="text-gray-600">GPA: {user.gpa}</p>
          <p className="text-gray-600">Graduation Year: {user.year}</p>
          <div className="mt-6 w-full">
            <h2 className="text-xl font-semibold mb-2">Experiences</h2>
            <ul className="list-disc list-inside mb-4">
              {mockExperiences.map((exp, index) => (
                <li key={index} className="text-gray-600">
                  {exp}
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              <Button className="bg-blue-500 text-white hover:bg-blue-600">
                <Link href="/edit-profile">Edit Profile</Link>
              </Button>
              <Button className="bg-green-500 text-white hover:bg-green-600">
                <Link href="/add-experience">Add Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

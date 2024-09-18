import { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session{
        user: User & DefaultSession["user"]
    }
    interface User {
        role: String | null
        gpa?: number | null;
        major?: string | null;
        year?: string | null;
    }
}
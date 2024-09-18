"use client"

import { signIn } from "next-auth/react";
import { Button } from './ui/button'

export function GetStartedButton() {
    return (
        <Button onClick={() => signIn()}>Get Started</Button>
    );
  }
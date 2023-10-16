"use client";

import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/Mode-toggle";
import { Spinner } from "@/components/Spinner";

export default function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top flex dark:bg-[#1f1f1f] item-center w-full p-6",
        scrolled && "border-b shadow-md"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant={"ghost"} size={"sm"}>
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size={"sm"}>Get Juzzy Free!</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link href={"/documents"}>Enter Juzzy</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}

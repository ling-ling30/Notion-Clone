"use client";
import { Spinner } from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4 z">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents & Plans. Unified Welcome to{" "}
        <span className="underline">JusRight</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium ">
        Juzzy is the connected workspace where better, faster work happen.
      </h3>
      {isLoading && (
        <div className="w-full flex justify-center items-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href={"/documents"}>
            Enter Juzzy
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Juzzy free <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}

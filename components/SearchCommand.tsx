"use client";

import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useSearch } from "@/hooks/use-search";
import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { File } from "lucide-react";
import Link from "next/link";

export const SearchCommand = () => {
  const { user } = useUser();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const documents = useQuery(api.documents.getSearch);
  const { toggle, isOpen, onClose } = useSearch();

  // SERVER SIDE RENDERING CANNOT RENDER DIALOG THAT APPEAR DYNAMICALLY BECAUSE IT DOESNT EVEN EXIST IN SERVERSIDE YET, SO WE PREVENT IT FROM RENDER from SERVER SIDE
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  const onSelect = (id: string) => {
    router.push(`/documents/${id}`);
    onClose();
  };

  if (!isMounted) {
    return null;
  }
  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput placeholder={`Search ${user?.username}'s Juzzy`} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Documents">
          {documents?.map((document) => {
            return (
              <Link key={document._id} href={`/documents/${document._id}`}>
                <CommandItem
                  value={`${document._id}=${document.title}`}
                  title={document.title}
                  onSelect={onSelect}
                >
                  {document.icon ? (
                    <p className="mr-2 text-[18px]">{document.icon}</p>
                  ) : (
                    <File className="mr-2 h4 w-4" />
                  )}

                  {document.title}
                </CommandItem>
              </Link>
            );
          })}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

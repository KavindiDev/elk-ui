"use client";

import * as React from "react";
import {
    Search as SearchIcon
} from "lucide-react";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Input } from "./ui/input";
import { categories } from "./Sidebar";
import Link from "next/link";

export function SearchboxComponent() {
    const [open, setOpen] = React.useState(false);

    const handleOpenDialog = () => {
        setOpen(true);
    };

    return (
        <>
            <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                <Input
                    className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search components..."
                    type="search"
                    onClick={handleOpenDialog}
                />
            </div>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a name to search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Components">
                        {
                            categories.map(function ({ title, href }) {
                                return (
                                    <Link href={href} onClick={(e)=>{
                                        e.preventDefault();
                                        setOpen(false);
                                        window.location.href = href;
                                    }}>
                                        <CommandItem>
                                            <span>{title}</span>
                                        </CommandItem>
                                    </Link>
                                )
                            })
                        }
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}

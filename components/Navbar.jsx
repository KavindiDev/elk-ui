import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import ElkLogo from "./Icons";

export default function Navbar() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-10 bg-white dark:bg-gray-950 text-gray-700 dark:text-white">
            <Link className="flex items-center justify-center" href="/">
                <ElkLogo className="h-6 w-6" />
                <span className="text-lg font-black ml-2">Elk/ui</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/components">
                    Components
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
                    About
                </Link>
                <ThemeToggle />
            </nav>
        </header>
    );
}


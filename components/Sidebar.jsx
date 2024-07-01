import Link from "next/link";
import { SearchboxComponent } from "./Searchbox";

export const categories = [
    {
        title: "Button",
        href: "/components/button",
    },
    {
        title: "Card",
        href: "/components/card",
    },
    {
        title: "Form",
        href: "/components/form",
    },
    {
        title: "Input",
        href: "/components/input",
    },
    {
        title: "Table",
        href: "/components/table",
    },
    {
        title: "Typography",
        href: "/components/typography",
    }
];

export default function Sidebar() {
    return (
        <aside className="hidden lg:flex flex-col bg-gray-100 dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 fixed overflow-y-scroll top-14 w-64 p-6 h-[calc(100vh-56px)]">
            <div className="flex-1 relative">
                <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-2">Search</h3>
                    <SearchboxComponent />
                </div>
                <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-2">Categories</h3>
                    <nav className="space-y-1">
                        {
                            categories.map(function ({ title, href }) {
                                return (
                                    <Link
                                        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
                                        href={href}
                                    >
                                        {title}
                                    </Link>
                                );
                            })
                        }
                    </nav>
                </div>
            </div>
        </aside>
    );
}
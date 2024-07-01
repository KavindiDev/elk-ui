import Link from "next/link";
import ElkLogo from "./Icons";

export default function Footer() {
    return (
        <footer className="py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-800 dark:text-gray-300 bg-white text-gray-700">
                <div className="container mx-auto text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">&copy; 2024 Elk/ui. All rights reserved.</p>
                </div>
        </footer>
    );
}

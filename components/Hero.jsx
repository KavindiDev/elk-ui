import Link from "next/link";
import ElkLogo from "./Icons";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section className="bg-gray-200 dark:bg-gray-900">

            <div className="mx-auto max-w-screen-xl px-4 pt-8 lg:pt-1 pb-8 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="pb-8">
                        <ElkLogo className="h-12 w-12 lg:h-16 lg:w-16 mx-auto text-gray-900 dark:text-gray-50" />
                    </div>
                    <h1
                        className="text-3xl font-extrabold sm:text-5xl"
                    >
                        Tailwind Components

                        <span className="sm:block"> for your next project </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-slate-700 dark:text-slate-300">
                        Beautifully designed, accessible, and customizable Tailwind CSS components.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild>
                            <Link
                                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                href="/components"
                            >
                                Explore Components
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Community() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-900">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Open-Source Community.</h2>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        We are always looking for contributors to help us improve our project. If you are interested in contributing, please check out our GitHub repository.
                    </p>
                </div>
                <div className="flex space-x-4 mx-auto">
                    <Button asChild>
                        <Link
                            href="https://github.com/KavindiDev/elk-ui"
                        >
                            <Github className="h-5 w-5 mr-2" />
                            Contribute on GitHub
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
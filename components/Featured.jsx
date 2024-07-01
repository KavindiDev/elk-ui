import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const components = [
  {
    title: "Button",
    description: "Customizable and accessible buttons.",
    href: "/components/button",
  },
  {
    title: "Card",
    description: "Versatile and flexible card component.",
    href: "/components/card",
  },
  {
    title: "Form",
    description: "Accessible and customizable dropdown menu.",
    href: "/components/form",
  },
  {
    title: "Input",
    description: "Stylish and accessible input fields.",
    href: "/components/input",
  },
  {
    title: "Table",
    description: "Responsive and customizable table component.",
    href: "/components/table",
  },
  {
    title: "Typography",
    description: "Accessible and customizable typography dialog.",
    href: "/components/typography",
  },
];

export default function FeaturedComponents() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-24 rounded-lg bg-gray-100 dark:bg-gray-800">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Components</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our collection of beautifully designed, accessible, and customizable Tailwind CSS components.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 auto-rows-max sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {
            components.map(function({title, description, href}){
              return (
                <Link
                className="group grid gap-1 rounded-lg bg-gray-200 p-6 shadow-sm transition-all hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-950 min-h-32 md:min-h-36 lg:min-h-40"
                href={href}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <ArrowRightIcon className="h-5 w-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
              </Link> 
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

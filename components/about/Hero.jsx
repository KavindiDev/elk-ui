import { MdGroups2 } from "react-icons/md";
import { RiOpenSourceFill } from "react-icons/ri";
import { TiArrowRepeatOutline } from "react-icons/ti";

export default function AboutHero() {
    return (
        <section className="text-center py-12">
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="max-w-3xl mx-auto mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
                At <strong>Elk/ui</strong>, we aim to revolutionize the way web
                applications are built by offering a diverse range of UI components that
                are both easy to use and highly customizable. Our vision is to make
                high-quality design accessible to developers of all levels, enabling
                them to create stunning web applications effortlessly.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex flex-col items-center">
                    <TiArrowRepeatOutline className="w-12 h-12 text-slate-500" />
                    <p className="mt-2 text-lg font-medium">Reusable Components</p>
                </div>
                <div className="flex flex-col items-center">
                    <MdGroups2 className="w-12 h-12 text-slate-500" />
                    <p className="mt-2 text-lg font-medium">Community-Driven</p>
                </div>
                <div className="flex flex-col items-center">
                    <RiOpenSourceFill className="w-12 h-12 text-slate-500" />
                    <p className="mt-2 text-lg font-medium">Open-Souce</p>
                </div>
            </div>
        </section>
    )
}
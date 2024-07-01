import { BsStack } from "react-icons/bs";
import { TbWorldCode } from "react-icons/tb";

export default function Offer() {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-center">What We Offer</h2>
            <div className="grid gap-8 md:grid-cols-2">

                <div className="bg-gray-200 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                        <BsStack className="w-8 h-8 text-slate-500 mr-4" />
                        <h3 className="text-2xl font-semibold">Component Library</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        A comprehensive set of UI components, including buttons, cards,
                        forms, and modals, designed to enhance your web applications.
                    </p>
                </div>

                <div className="bg-gray-200 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                        <TbWorldCode className="w-8 h-8 text-slate-500 mr-4" />
                        <h3 className="text-2xl font-semibold">Community Contributions</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        An open-source project that thrives on community contributions,
                        allowing developers from around the world to participate in
                        enhancing and expanding our library.
                    </p>
                </div>
            </div>
        </section>
    );
}
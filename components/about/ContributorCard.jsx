import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function ContributorCard({ name, role, description, image, githubLink, twitterLink}) {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full md:w-1/3 lg:w-1/4">
            <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                {role}
            </p>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                {description}
            </p>
            {/* Social Links for github and twitter for cardfooter*/}
            <div className="flex justify-center mt-4">
                <Link
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                    <FaGithub className="w-6 h-6" />
                </Link>
                <Link
                    href={twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 ml-4"
                >
                    <FaTwitter className="w-6 h-6" />
                </Link>
            </div>
        </div>
    );
}
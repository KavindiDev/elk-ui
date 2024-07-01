export default function ContentPage({ children, title, description }) {
    return (
        <main className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
                <p className="text-gray-500 dark:text-gray-400">
                    {description}
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
                {children}
            </div>
        </main >
    );
}
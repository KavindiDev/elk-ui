const Alert = ({ text, code }) => {
    return (
        <div className="bg-blue-50 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-200 px-4 py-3 rounded-lg relative" role="alert">
            <strong className="font-bold">Alert:</strong>
            <span className="block sm:inline ml-2">{text}</span>
            <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 mt-2 rounded">
                <code>{code}</code>
            </pre>
        </div>
    );
};

export default Alert;
const buttonComponents=[
    {
        title:"Primary Button",
        component:<button className="bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded transition-transform duration-300 hover:bg-blue-700 dark:hover:bg-blue-600">Primary Button</button>,
        code:"<button class='bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded transition-transform duration-300 hover:bg-blue-700 dark:hover:bg-blue-600'>"
    },
    {
        title:"Accent Button",
        component:<button className="bg-blue-400 dark:bg-blue-600 text-white py-3 px-6 rounded transition-transform duration-300 hover:scale-105 hover:bg-blue-500 dark:hover:bg-blue-700">Accent Button</button>,
        code:"<button class='bg-blue-400 dark:bg-blue-600 text-white py-3 px-6 rounded transition-transform duration-300 hover:scale-105 hover:bg-blue-500 dark:hover:bg-blue-700'>"
    },
    {
        title:"Outline Button",
        component:<button className="border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 py-3 px-6 rounded transition-transform duration-300 hover:bg-blue-50 dark:hover:bg-blue-700 dark:hover:text-gray-100">Outline Button</button>,
        code:"<button class='border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 py-3 px-6 rounded transition-transform duration-300 hover:bg-blue-50 dark:hover:bg-blue-700 dark:hover:text-gray-100'>"
    },
    {
        title:"Disabled Button",
        component:<button className="bg-gray-300 dark:bg-gray-700 text-gray-400 dark:text-gray-500 py-3 px-6 rounded cursor-not-allowed" disabled>Disabled Button</button>,
        code:"<button class='bg-gray-300 dark:bg-gray-700 text-gray-400 dark:text-gray-500 py-3 px-6 rounded cursor-not-allowed' disabled>"
    },
    {
        title:"Small Button",
        component:<button className="bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded transition-transform duration-300 hover:bg-blue-700 dark:hover:bg-blue-600">Small Button</button>,
        code:"<button class='bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded transition-transform duration-300 hover:bg-blue-700 dark:hover:bg-blue-600'>"
    },
    {
        title:"Large Button",
        component:<button className="bg-blue-600 dark:bg-blue-500 text-white py-4 px-8 rounded transition-transform duration-300 hover:bg-blue-700 dark:hover:bg-blue-600">Large Button</button>,
        code:"<button class='bg-blue-600 dark:bg-blue-500 text-white py-4 px-8 rounded transition-transform duration-300 hover:bg-blue-700 dark:hover:bg-blue-600'>"
    },
    {
        title:"Rounded Full Button",
        component:<button className="bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded-full transition-transform duration-300 hover:bg-blue-700 dark:hover:bg-blue-600">Rounded Full Button</button>,
        code:"<button class='bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded-full transition-transform duration-300 hover:bg-blue-700 dark:hover:bg-blue-600'>"
    },
    {
        title:"Icon Button",
        component:<button className="bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded transition-transform duration-300 hover:bg-blue-700 dark:hover:bg-blue-600 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            Icon Button
        </button>,
        code:`<button class='bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded transition-transform duration-300 hover:bg-blue-700 dark:hover:bg-blue-600 flex items-center'>
            <svg class='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
            Icon Button
        </button>`
    },
    {
        title:"Loading",
        component:<button className="bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded transition-transform duration-300 hover:bg-blue-700 dark:hover:bg-blue-600 flex items-center">
            <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.477 0 0 6.477 0 12h4zm2 5.291A7.953 7.953 0 014 12H0c0 4.418 3.582 8 8 8v-4.709z"></path>
            </svg>
            Loading
        </button>,
        code:`<button class='bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded transition-transform duration-300 hover:bg-blue-700 dark:hover:bg-blue-600 flex items-center'>
            <svg class='animate-spin mr-2 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                <circle class='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'></circle>
                <path class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C6.477 0 0 6.477 0 12h4zm2 5.291A7.953 7.953 0 014 12H0c0 4.418 3.582 8 8 8v-4.709z'></path>
            </svg>
            Loading
        </button>`
    }
]

export default buttonComponents

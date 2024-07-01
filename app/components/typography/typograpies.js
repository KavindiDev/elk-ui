import Alert from "@/components/Alert";

const typoComponents = [
    {
        title: "Headings",
        component: (
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Primary Heading</h1>
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Secondary Heading</h2>
                <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-300">Tertiary Heading</h3>
                <h4 className="text-xl font-normal text-gray-600 dark:text-gray-400">Quaternary Heading</h4>
                <h5 className="text-lg font-light text-gray-500 dark:text-gray-500">Quinary Heading</h5>
                <h6 className="text-base font-extralight text-gray-400 dark:text-gray-600">Senary Heading</h6>
            </div>
        ),
        code: `
            <div class="space-y-4">
                <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100">Primary Heading</h1>
                <h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-200">Secondary Heading</h2>
                <h3 class="text-2xl font-medium text-gray-700 dark:text-gray-300">Tertiary Heading</h3>
                <h4 class="text-xl font-normal text-gray-600 dark:text-gray-400">Quaternary Heading</h4>
                <h5 class="text-lg font-light text-gray-500 dark:text-gray-500">Quinary Heading</h5>
                <h6 class="text-base font-extralight text-gray-400 dark:text-gray-600">Senary Heading</h6>
            </div>
        `
    },
    {
        title: "Standard Paragraph",
        component: (
            <p className="text-base text-gray-900 dark:text-gray-100">
                This is a standard paragraph. It provides regular text content.
            </p>
        ),
        code: `<p class="text-base text-gray-900 dark:text-gray-100">
                    This is a standard paragraph. It provides regular text content.
                </p>`
    },
    {
        title: "Muted Paragraph",
        component: (
            <p className="text-base text-gray-600 dark:text-gray-400">
                This is a muted paragraph. It has a lighter color to indicate less importance.
            </p>
        ),
        code: `<p class="text-base text-gray-600 dark:text-gray-400">
                    This is a muted paragraph. It has a lighter color to indicate less importance.
                </p>`
    },
    {
        title: "Highlighted Paragraph",
        component: (
            <p className="text-base text-gray-900 dark:text-gray-100 bg-yellow-100 dark:bg-yellow-900 p-2 rounded">
                This is a highlighted paragraph. It draws attention to important information.
            </p>
        ),
        code: `<p class="text-base text-gray-900 dark:text-gray-100 bg-yellow-100 dark:bg-yellow-900 p-2 rounded">
                    This is a highlighted paragraph. It draws attention to important information.
                </p>`
    },
    {
        title: "Blockquote",
        component: (
            <blockquote className="pl-4 border-l-4 border-blue-500 text-gray-900 dark:text-gray-100">
                "This is a blockquote. It is used to highlight a significant section of text."
            </blockquote>
        ),
        code: `<blockquote class="pl-4 border-l-4 border-blue-500 text-gray-900 dark:text-gray-100">
                    "This is a blockquote. It is used to highlight a significant section of text."
                </blockquote>`
    },
    {
        title: "Code Block",
        component: (
            <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded">
                <code>This is a code block. It is used to display code snippets.</code>
            </pre>
        ),
        code: `<pre class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded">
                    <code>This is a code block. It is used to display code snippets.</code>
                </pre>`
    },
    {
        title: "Inline Code",
        component: (<p className="text-base text-gray-900 dark:text-gray-100">
            This is a sentence with <code className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1">inline code</code>.
        </p>
        ),
        code: `<p class="text-base text-gray-900 dark:text-gray-100">
                    This is a sentence with <code class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded p-1">inline code</code>.
                </p>`
    },
    {
        title: "Lead Text",
        component: (
            <p className="text-xl text-gray-900 dark:text-gray-100 font-light">
                This is lead text. It is used for introductory text with a larger font size.
            </p>
        ),
        code: `<p class="text-xl text-gray-900 dark:text-gray-100 font-light">
                    This is lead text. It is used for introductory text with a larger font size.
                </p>`
    },
    {
        title: "Small Text",
        component: (
            <p className="text-sm text-gray-600 dark:text-gray-400">
                This is small text. It is used for less important details with a smaller font size.
            </p>
        ),
        code: `<p class="text-sm text-gray-600 dark:text-gray-400">
                    This is small text. It is used for less important details with a smaller font size.
                </p>`
    },
    {
        title: "Uppercase Text",
        component: (
            <p className="text-base text-gray-900 dark:text-gray-100 uppercase">
                This is uppercase text. It converts all letters to uppercase.
            </p>
        ),
        code: `<p class="text-base text-gray-900 dark:text-gray-100 uppercase">
                    This is uppercase text. It converts all letters to uppercase.
                </p>`
    },
    {
        title: "Gradient Text",
        component: (
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Gradient Text
            </h1>
        ),
        code: `<h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Gradient Text
                </h1>`
    },
    {
        title: "Text Shadow",
        component: (
            <h2 className="text-3xl font-semibold text-gray-900 shadow-lg p-2 rounded-lg dark:text-gray-100 dark:bg-gray-800 dark:shadow-gray-700">
                Text Shadow
            </h2>
        ),
        code: `<h2 class="text-3xl font-semibold text-gray-900 shadow-lg p-2 rounded-lg dark:text-gray-100 dark:bg-gray-800 dark:shadow-gray-700">
                    Text Shadow
                </h2>`
    },
    {
        title: "Responsive Typography",
        component: (
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-900 dark:text-gray-100">
                Responsive Typography
            </h3>
        ),
        code: `<h3 class="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-900 dark:text-gray-100">
                    Responsive Typography
                </h3>`
    },
    {
        title: "Text with Icons",
        component: (
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 9.90625 0 C 9.8125 0.0078125 9.714844 0.0273438 9.625 0.0625 C 9.515625 0.105469 7 1.128906 7 5.46875 C 7 8.628906 8.660156 11.1875 10.8125 13.0625 C 11.207031 12.875 11.621094 12.78125 12.0625 12.78125 C 12.507813 12.78125 12.96875 12.871094 13.375 13.0625 C 13.757813 13.246094 14.171875 13.34375 14.65625 13.34375 C 15.320313 13.34375 16.089844 13.171875 16.90625 13 C 17.917969 12.792969 19.042969 12.5625 20.28125 12.5625 C 22.558594 12.5625 24.546875 13.371094 26.3125 15.03125 C 30.324219 15.222656 33.570313 16.261719 35.625 17.125 C 36.160156 17.351563 36.617188 17.632813 37.03125 17.96875 C 39.679688 16.421875 41.972656 13.863281 42.96875 10.28125 C 43.105469 9.785156 42.824219 9.246094 42.34375 9.0625 C 41.863281 8.878906 41.324219 9.097656 41.09375 9.5625 C 40.628906 10.503906 37.546875 14 33.4375 14 C 31.910156 14 31.765625 13.5625 31.75 11.34375 C 31.730469 8.816406 31.703125 5 25 5 C 24.546875 5 24.148438 5.3125 24.03125 5.75 C 23.914063 6.1875 24.105469 6.648438 24.5 6.875 C 27.257813 8.457031 27.09375 9.335938 26.8125 10.78125 C 26.699219 11.367188 26.566406 12.039063 26.625 12.78125 C 25.5 12.449219 24.128906 11.734375 23.125 10.5 C 21.828125 8.902344 21.429688 6.792969 21.96875 4.21875 C 22.054688 3.804688 21.894531 3.378906 21.53125 3.15625 C 21.171875 2.933594 20.703125 2.949219 20.375 3.21875 C 17.644531 5.449219 17.664063 8.523438 18.34375 10.71875 C 16.328125 10.179688 13.335938 8.851563 11.6875 6.5625 C 10.5625 4.996094 10.300781 3.21875 10.9375 1.3125 C 11.058594 0.945313 10.96875 0.550781 10.6875 0.28125 C 10.476563 0.0820313 10.1875 -0.0234375 9.90625 0 Z M 20.21875 14.5625 C 19.210938 14.574219 18.210938 14.777344 17.28125 14.96875 C 15.632813 15.308594 14.082031 15.632813 12.5 14.875 C 12.179688 14.722656 11.796875 14.734375 11.5 14.9375 C 11.207031 15.136719 11.066406 15.488281 11.09375 15.84375 C 11.300781 18.632813 12.65625 21.851563 17.625 22.75 C 16.808594 23.8125 16.542969 25.238281 16.25 26.6875 C 15.710938 29.332031 15.082031 32.332031 11.4375 35.3125 C 11.195313 35.511719 11.046875 35.808594 11.0625 36.125 C 11.078125 36.4375 11.238281 36.726563 11.5 36.90625 C 12.042969 37.273438 13.132813 37.347656 14.125 37.3125 C 12.425781 39.195313 8.640625 41.394531 6.125 42.5625 C 5.773438 42.726563 5.535156 43.082031 5.53125 43.46875 C 5.53125 43.855469 5.746094 44.207031 6.09375 44.375 C 9.628906 46.058594 14.351563 46.328125 16.875 46.34375 C 16.46875 47.007813 15.933594 47.753906 15.375 48.25 C 15.0625 48.527344 14.976563 48.953125 15.125 49.34375 C 15.273438 49.730469 15.648438 50 16.0625 50 C 25.816406 50 32.582031 48.613281 34.34375 47.9375 C 34.730469 47.789063 35 47.414063 35 47 C 35 44.109375 33.964844 39.949219 33.0625 36.96875 C 26.425781 36.53125 24.191406 31.625 24.09375 31.40625 C 23.871094 30.898438 24.085938 30.316406 24.59375 30.09375 C 25.097656 29.871094 25.683594 30.089844 25.90625 30.59375 C 25.988281 30.773438 27.773438 34.542969 33.03125 34.96875 C 34.617188 34.835938 35.46875 34.394531 36.3125 33.96875 C 37.300781 33.472656 38.226563 33 40.71875 33 C 43.710938 33 46 29.496094 46 28.0625 C 46 27.121094 45.480469 26.777344 43.96875 25.8125 L 43.21875 25.34375 C 41.691406 24.359375 38.019531 21.96875 36.8125 21.1875 C 36.558594 19.945313 35.632813 19.300781 34.84375 18.96875 C 32.785156 18.105469 29.53125 17.070313 25.46875 17 C 23.664063 15.042969 21.894531 14.542969 20.21875 14.5625 Z M 28.5 22.59375 L 33 23.78125 C 32.667969 25.019531 31.398438 25.773438 30.15625 25.4375 C 28.917969 25.101563 28.164063 23.832031 28.5 22.59375 Z"></path>
                </svg> Text with Icon
            </p>
        ),
        code: `<p class="text-lg font-medium text-gray-900 dark:text-gray-100 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M 9.90625 0 C 9.8125 0.0078125 9.714844 0.0273438 9.625 0.0625 C 9.515625 0.105469 7 1.128906 7 5.46875 C 7 8.628906 8.660156 11.1875 10.8125 13.0625 C 11.207031 12.875 11.621094 12.78125 12.0625 12.78125 C 12.507813 12.78125 12.96875 12.871094 13.375 13.0625 C 13.757813 13.246094 14.171875 13.34375 14.65625 13.34375 C 15.320313 13.34375 16.089844 13.171875 16.90625 13 C 17.917969 12.792969 19.042969 12.5625 20.28125 12.5625 C 22.558594 12.5625 24.546875 13.371094 26.3125 15.03125 C 30.324219 15.222656 33.570313 16.261719 35.625 17.125 C 36.160156 17.351563 36.617188 17.632813 37.03125 17.96875 C 39.679688 16.421875 41.972656 13.863281 42.96875 10.28125 C 43.105469 9.785156 42.824219 9.246094 42.34375 9.0625 C 41.863281 8.878906 41.324219 9.097656 41.09375 9.5625 C 40.628906 10.503906 37.546875 14 33.4375 14 C 31.910156 14 31.765625 13.5625 31.75 11.34375 C 31.730469 8.816406 31.703125 5 25 5 C 24.546875 5 24.148438 5.3125 24.03125 5.75 C 23.914063 6.1875 24.105469 6.648438 24.5 6.875 C 27.257813 8.457031 27.09375 9.335938 26.8125 10.78125 C 26.699219 11.367188 26.566406 12.039063 26.625 12.78125 C 25.5 12.449219 24.128906 11.734375 23.125 10.5 C 21.828125 8.902344 21.429688 6.792969 21.96875 4.21875 C 22.054688 3.804688 21.894531 3.378906 21.53125 3.15625 C 21.171875 2.933594 20.703125 2.949219 20.375 3.21875 C 17.644531 5.449219 17.664063 8.523438 18.34375 10.71875 C 16.328125 10.179688 13.335938 8.851563 11.6875 6.5625 C 10.5625 4.996094 10.300781 3.21875 10.9375 1.3125 C 11.058594 0.945313 10.96875 0.550781 10.6875 0.28125 C 10.476563 0.0820313 10.1875 -0.0234375 9.90625 0 Z M 20.21875 14.5625 C 19.210938 14.574219 18.210938 14.777344 17.28125 14.96875 C 15.632813 15.308594 14.082031 15.632813 12.5 14.875 C 12.179688 14.722656 11.796875 14.734375 11.5 14.9375 C 11.207031 15.136719 11.066406 15.488281 11.09375 15.84375 C 11.300781 18.632813 12.65625 21.851563 17.625 22.75 C 16.808594 23.8125 16.542969 25.238281 16.25 26.6875 C 15.710938 29.332031 15.082031 32.332031 11.4375 35.3125 C 11.195313 35.511719 11.046875 35.808594 11.0625 36.125 C 11.078125 36.4375 11.238281 36.726563 11.5 36.90625 C 12.042969 37.273438 13.132813 37.347656 14.125 37.3125 C 12.425781 39.195313 8.640625 41.394531 6.125 42.5625 C 5.773438 42.726563 5.535156 43.082031 5.53125 43.46875 C 5.53125 43.855469 5.746094 44.207031 6.09375 44.375 C 9.628906 46.058594 14.351563 46.328125 16.875 46.34375 C 16.46875 47.007813 15.933594 47.753906 15.375 48.25 C 15.0625 48.527344 14.976563 48.953125 15.125 49.34375 C 15.273438 49.730469 15.648438 50 16.0625 50 C 25.816406 50 32.582031 48.613281 34.34375 47.9375 C 34.730469 47.789063 35 47.414063 35 47 C 35 44.109375 33.964844 39.949219 33.0625 36.96875 C 26.425781 36.53125 24.191406 31.625 24.09375 31.40625 C 23.871094 30.898438 24.085938 30.316406 24.59375 30.09375 C 25.097656 29.871094 25.683594 30.089844 25.90625 30.59375 C 25.988281 30.773438 27.773438 34.542969 33.03125 34.96875 C 34.617188 34.835938 35.46875 34.394531 36.3125 33.96875 C 37.300781 33.472656 38.226563 33 40.71875 33 C 43.710938 33 46 29.496094 46 28.0625 C 46 27.121094 45.480469 26.777344 43.96875 25.8125 L 43.21875 25.34375 C 41.691406 24.359375 38.019531 21.96875 36.8125 21.1875 C 36.558594 19.945313 35.632813 19.300781 34.84375 18.96875 C 32.785156 18.105469 29.53125 17.070313 25.46875 17 C 23.664063 15.042969 21.894531 14.542969 20.21875 14.5625 Z M 28.5 22.59375 L 33 23.78125 C 32.667969 25.019531 31.398438 25.773438 30.15625 25.4375 C 28.917969 25.101563 28.164063 23.832031 28.5 22.59375 Z"></path>
                    </svg> Text with Icon
                </p>`
    },
    {
        title: "Highlighted Text",
        component: (
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
                This is <span className="bg-yellow-200 dark:bg-yellow-700 p-1 rounded">highlighted text</span> in a paragraph.
            </p>
        ),
        code: `<p class="text-lg font-medium text-gray-900 dark:text-gray-100">
                    This is <span class="bg-yellow-200 dark:bg-yellow-700 p-1 rounded">highlighted text</span> in a paragraph.
            </p>`
    },
    {
        title: "Outlined Text",
        component: (
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100 p-2 rounded">
                Outlined Text
            </h4>
        ),
        code: `<h4 class="text-xl font-bold text-gray-900 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100 p-2 rounded">
                    Outlined Text
                </h4>`
    },
    {
        title: "Rotated Text",
        component: (
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100 transition-transform duration-300 hover:rotate-[5deg]">
                Rotated Text
            </p>

        ),
        code: `<p class="text-lg font-medium text-gray-900 dark:text-gray-100 transition-transform duration-300 hover:rotate-[5deg]">
                Rotated Text
                </p>`
    },
    {
        title: "Underline and Strikethrough",
        component: (
            <div className="space-y-4">
                <p className="text-lg font-medium text-gray-900 dark:text-gray-100 underline">
                    Underlined Text
                </p>
                <p className="text-lg font-medium text-gray-900 dark:text-gray-100 line-through">
                    Strikethrough Text
                </p>
            </div>
        ),
        code: `<div class="space-y-4">
                    <p class="text-lg font-medium text-gray-900 dark:text-gray-100 underline">
                        Underlined Text
                    </p>
                    <p class="text-lg font-medium text-gray-900 dark:text-gray-100 line-through">
                        Strikethrough Text
                    </p>
                </div>`
    },
    {
        title: "Animated Typing Effect",
        component: (
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
                <span>
                    Animated Typing Effect
                    <span className="animate-blink">|</span>
                </span>
            </p>

        ),
        code: `<p class="text-lg font-medium text-gray-900 dark:text-gray-100">
                <span>
                    Animated Typing Effect
                    <span class="animate-blink">|</span>
                </span>
            </p>`,
        note: 
        <Alert text="You need to add the following keyframes to your tailwind.config.js file to make this work:"
        code={`module.exports = {
    theme: {
        extend: {
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: 0 },
                    '50%': { opacity: 1 }
                }
            },
            animation: {
                blink: 'blink 1s step-end infinite'
            }
        }
    }
};`
}/>
}
]
export default typoComponents;
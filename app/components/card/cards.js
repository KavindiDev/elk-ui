const cardComponents = [
    {
        title: "Basic Info Card",
        component: (
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm card p-4 mb-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">Basic Info Card</h3>
                <p className="text-base text-gray-600 dark:text-gray-300">This is a simple info card with basic details.</p>
            </div>
        ),
        code: `<div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm card p-4 mb-4">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">Basic Info Card</h3>
        <p class="text-base text-gray-600 dark:text-gray-300">This is a simple info card with basic details.</p>
    </div>`
    },
    {
        title: "Profile Card",
        component: (
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm card p-4 mb-4 flex items-center">
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Profile" className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-1">John Doe</h3>
                    <p className="text-base text-gray-600 dark:text-gray-300">Software Engineer</p>
                </div>
            </div>
        ),
        code: `<div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm card p-4 mb-4 flex items-center">
        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Profile" class="w-16 h-16 rounded-full mr-4" />
        <div>
            <h3 class="text-lg font-medium text-gray-800 dark:text-gray-100 mb-1">John Doe</h3>
            <p class="text-base text-gray-600 dark:text-gray-300">Software Engineer</p>
        </div>
    </div>`
    },
    {
        title: "Product Card",
        component: (
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm card p-4 mb-4">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop" alt="Product" className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">Product Name</h3>
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">$29.99</p>
                    <button className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded transition-transform duration-300 hover:scale-105">Add to Cart</button>
                </div>
            </div>
        ),
        code: `<div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm card p-4 mb-4">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop" alt="Product" class="w-full h-48 object-cover rounded-t-lg" />
        <div class="p-4">
            <h3 class="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">Product Name</h3>
            <p class="text-base text-gray-600 dark:text-gray-300 mb-4">$29.99</p>
            <button class="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded transition-transform duration-300 hover:scale-105">Add to Cart</button>
        </div>
    </div>`
    },
    {
        title: "Blog Post Card",
        component: (
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm card p-4 mb-4">
                <img src="https://images.unsplash.com/photo-1718078942734-2e039bd097a1?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Blog" className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">Blog Post Title</h3>
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">This is a short summary of the blog post content...</p>
                    <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">Read More</a>
                </div>
            </div>
        ),
        code: `<div class ="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm card p-4 mb-4">
        <img src="https://images.unsplash.com/photo-1718078942734-2e039bd097a1?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Blog" class ="w-full h-48 object-cover rounded-t-lg" />
        <div class ="p-4">
            <h3 class ="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">Blog Post Title</h3>
            <p class ="text-base text-gray-600 dark:text-gray-300 mb-4">This is a short summary of the blog post content...</p>
            <a href="#" class ="text-blue-500 dark:text-blue-400 hover:underline">Read More</a>
        </div>
    </div>`
    },
    {
        title: "Notification Card",
        component: (
            <div className="bg-white dark:bg-gray-900 border-l-4 border-blue-500 dark:border-blue-600 rounded-lg shadow-sm card p-4 mb-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">Notification Title</h3>
                <p className="text-base text-gray-600 dark:text-gray-300">This is a notification message to inform you about something important.</p>
            </div>
        ),
        code: `<div class="bg-white dark:bg-gray-900 border-l-4 border-blue-500 dark:border-blue-600 rounded-lg shadow-sm card p-4 mb-4">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">Notification Title</h3>
        <p class="text-base text-gray-600 dark:text-gray-300">This is a notification message to inform you about something important.</p>
    </div>`
    },
    {
        title: "Statistics Card",
        component: (
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm card p-4 mb-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">Statistics</h3>
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex-1 text-center mb-4 sm:mb-0 sm:mr-4">
                        <p className="text-base text-gray-600 dark:text-gray-300">Users</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">1,234</p>
                    </div>
                    <div className="flex-1 text-center mb-4 sm:mb-0 sm:mr-4">
                        <p className="text-base text-gray-600 dark:text-gray-300">Revenue</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">$5,678</p>
                    </div>
                    <div className="flex-1 text-center">
                        <p className="text-base text-gray-600 dark:text-gray-300">Orders</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">456</p>
                    </div>
                </div>
            </div>
        ),
        code: `<div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm card p-4 mb-4">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">Statistics</h3>
      <div class="flex flex-col sm:flex-row items-center justify-between">
        <div class="flex-1 text-center mb-4 sm:mb-0 sm:mr-4">
          <p class="text-base text-gray-600 dark:text-gray-300">Users</p>
          <p class="text-2xl font-bold text-gray-800 dark:text-gray-100">1,234</p>
        </div>
        <div class="flex-1 text-center mb-4 sm:mb-0 sm:mr-4">
          <p class="text-base text-gray-600 dark:text-gray-300">Revenue</p>
          <p class="text-2xl font-bold text-gray-800 dark:text-gray-100">$5,678</p>
        </div>
        <div class="flex-1 text-center">
          <p class="text-base text-gray-600 dark:text-gray-300">Orders</p>
          <p class="text-2xl font-bold text-gray-800 dark:text-gray-100">456</p>
        </div>
      </div>
    </div>`
    }
]
export default cardComponents;
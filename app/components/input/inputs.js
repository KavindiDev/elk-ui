const inputComponents = [
  {
    title: "Primary Button",
    component: <button className="bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded transition-transform duration-300 hover:bg-blue-700 dark:hover:bg-blue-600">Primary Button</button>,
    code: "<button class='bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded transition-transform duration-300 hover:bg-blue-700 dark:hover:bg-blue-600'>"
  },
  {
    title: "Basic Input",
    component: (
      <div className="mb-6">
        <label htmlFor="basic-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Basic Input</label>
        <input type="text" id="basic-input" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="Enter your text here" />
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">This is a helper text.</p>
      </div>
    ),
    code: `<div class="mb-6">
      <label for="basic-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Basic Input</label>
      <input type="text" id="basic-input" class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="Enter your text here">
      <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">This is a helper text.</p>
    </div>`
  },
  {
    title: "Input with Icon",
    component: (
      <div className="mb-6 relative">
        <label htmlFor="input-icon" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Input with Icon</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <input type="text" id="input-icon" className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="Search" />
        </div>
      </div>
    ),
    code: `<div class="mb-6 relative">
      <label for="input-icon" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Input with Icon</label>
      <div class="relative mt-1">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <input type="text" id="input-icon" class="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="Search">
      </div>
    </div>`
  },
  {
    title: "Success Input",
    component: (
      <div className="mb-6">
        <label htmlFor="input-success" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Success Input</label>
        <input type="text" id="input-success" className="mt-1 block w-full px-3 py-2 border border-green-300 dark:border-green-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 dark:focus:ring-green-600 focus:border-green-500 dark:focus:border-green-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="Success state" />
        <p className="mt-2 text-sm text-green-600 dark:text-green-400">Success message.</p>
      </div>
    ),
    code: `<div class="mb-6">
      <label for="input-success" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Success Input</label>
      <input type="text" id="input-success" class="mt-1 block w-full px-3 py-2 border border-green-300 dark:border-green-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 dark:focus:ring-green-600 focus:border-green-500 dark:focus:border-green-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="Success state">
      <p class="mt-2 text-sm text-green-600 dark:text-green-400">Success message.</p>
    </div>`
  },
  {
    title: "Error Input",
    component: (
      <div className="mb-6">
        <label htmlFor="input-error" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Error Input</label>
        <input type="text" id="input-error" className="mt-1 block w-full px-3 py-2 border border-red-300 dark:border-red-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 dark:focus:ring-red-600 focus:border-red-500 dark:focus:border-red-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="Error state" />
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">Error message.</p>
      </div>
    ),
    code: `<div class="mb-6">
      <label for="input-error" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Error Input</label>
      <input type="text" id="input-error" class="mt-1 block w-full px-3 py-2 border border-red-300 dark:border-red-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 dark:focus:ring-red-600 focus:border-red-500 dark:focus:border-red-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="Error state">
      <p class="mt-2 text-sm text-red-600 dark:text-red-400">Error message.</p>
    </div>`
  },
  {
    title: "Disabled Input",
    component: (
      <div className="mb-6">
        <label htmlFor="disabled-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Disabled Input</label>
        <input type="text" id="disabled-input" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed focus:outline-none sm:text-sm" placeholder="Disabled" disabled />
      </div>
    ),
    code: `<div class="mb-6">
      <label for="disabled-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Disabled Input</label>
      <input type="text" id="disabled-input" class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed focus:outline-none sm:text-sm" placeholder="Disabled" disabled>
    </div>`
  },
  {
    title: "Input Group",
    component: (
      <div className="mb-6">
        <label htmlFor="input-group" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Input Group</label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm">$</span>
          <input type="text" id="input-group" className="flex-1 block w-full rounded-none rounded-r-md px-3 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="0.00" />
        </div>
      </div>
    ),
    code: `<div class="mb-6">
      <label for="input-group" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Input Group</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm">$</span>
        <input type="text" id="input-group" class="flex-1 block w-full rounded-none rounded-r-md px-3 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="0.00">
      </div>
    </div>`
  },
  {
    title: "Upload File",
    component: (
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Upload File</label>
        <div className="mt-1 flex items-center">
          <span className="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
            <svg className="h-5/6 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 256 256">
              <path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
              <polyline points="152 32 152 88 208 88" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
              <polyline points="104 144 128 120 152 144" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
              <line x1="128" y1="184" x2="128" y2="120" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
            </svg>
          </span>
          <input type="file" className="ml-5 bg-white dark:bg-gray-800 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 sm:text-sm dark:text-gray-200" />
        </div>
      </div>
    ),
    code: `<div class="mb-6">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Upload File</label>
      <div class="mt-1 flex items-center">
        <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
          <svg class="h-5/6 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 256 256">
              <path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
              <polyline points="152 32 152 88 208 88" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
              <polyline points="104 144 128 120 152 144" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
              <line x1="128" y1="184" x2="128" y2="120" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
          </svg>
        </span>
        <input type="file" class="ml-5 bg-white dark:bg-gray-800 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 sm:text-sm dark:text-gray-200">
      </div>
    </div>`
  },
  {
    title: "Input with Tooltip",
    component: (
      <div className="mb-6 relative group">
        <label htmlFor="tooltip-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Input with Tooltip</label>
        <div className="relative mt-1">
          <input type="text" id="tooltip-input" className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="Hover for info" />
          <div className="absolute right-0 inset-y-0 flex items-center pr-3 pointer-events-none">
            <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke="currentColor" aria-hidden="true">
              <path className="fill-slate-600" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
              <path fill="#fff" d="M22 22h4v11h-4V22zM26.5 16.5c0 1.379-1.121 2.5-2.5 2.5s-2.5-1.121-2.5-2.5S22.621 14 24 14 26.5 15.121 26.5 16.5z" />
            </svg>
          </div>
          <div className="absolute right-0 top-0 mt-6 w-64 bg-white dark:bg-gray-800 p-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg group-hover:block hidden">
            <p className="text-sm text-gray-700 dark:text-gray-300">This is a tooltip message providing additional information.</p>
          </div>
        </div>
      </div>
    ),
    code: `<div class="mb-6 relative group">
      <label for="tooltip-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Input with Tooltip</label>
      <div class="relative mt-1">
        <input type="text" id="tooltip-input" class="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="Hover for info">
        <div class="absolute right-0 inset-y-0 flex items-center pr-3 pointer-events-none">
          <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke="currentColor" aria-hidden="true">
              <path class="fill-slate-600" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
              <path fill="#fff" d="M22 22h4v11h-4V22zM26.5 16.5c0 1.379-1.121 2.5-2.5 2.5s-2.5-1.121-2.5-2.5S22.621 14 24 14 26.5 15.121 26.5 16.5z" />
          </svg>
        </div>
        <div class="absolute right-0 top-0 mt-6 w-64 bg-white dark:bg-gray-800 p-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg group-hover:block hidden">
          <p class="text-sm text-gray-700 dark:text-gray-300">This is a tooltip message providing additional information.</p>
        </div>
      </div>
    </div>`
  },
  {
    title: "Input with Prefix",
    component: (
      <div className="mb-6">
        <label htmlFor="input-prefix" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Input with Prefix</label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm">@</span>
          <input type="text" id="input-prefix" className="flex-1 block w-full rounded-none rounded-r-md px-3 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="username" />
        </div>
      </div>
    ),
    code: `<div class="mb-6">
          <label for="input-prefix" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Input with Prefix</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm">@</span>
            <input type="text" id="input-prefix" class="flex-1 block w-full rounded-none rounded-r-md px-3 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="username">
          </div>
        </div>`
  },
  {
    title: "Input with Suffix",
    component: (
      <div className="mb-6">
        <label htmlFor="input-suffix" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Input with Suffix</label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input type="text" id="input-suffix" className="flex-1 block w-full rounded-none rounded-l-md px-3 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="domain" />
          <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm">.com</span>
        </div>
      </div>
    ),
    code: `<div class="mb-6">
          <label for="input-suffix" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Input with Suffix</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <input type="text" id="input-suffix" class="flex-1 block w-full rounded-none rounded-l-md px-3 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 sm:text-sm dark:bg-gray-800 dark:text-gray-200" placeholder="domain">
            <span class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 sm:text-sm">.com</span>
          </div>
        </div>`
  }
]
export default inputComponents;
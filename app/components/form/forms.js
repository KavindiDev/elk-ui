import Alert from "@/components/Alert";

const formsComponents = [
    {
        title: "Contact Form",
        component: (
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Contact Us</h2>
                <form action="#" method="POST" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="first-name" className="block text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                            <input type="text" id="first-name" name="first-name"
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                                required />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                            <input type="text" id="last-name" name="last-name"
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                                required />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" name="email"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                            required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                        <input type="text" id="subject" name="subject"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                            required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                        <textarea id="message" name="message"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                            rows="4" required></textarea>
                    </div>
                    <button type="submit"
                        className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700">Submit</button>
                </form>
            </div>
        ),
        code: `<div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Contact Us</h2>
            <form action="#" method="POST" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label for="first-name" class="block text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                        <input type="text" id="first-name" name="first-name"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                            required />
                    </div>
                    <div>
                        <label for="last-name" class="block text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                        <input type="text" id="last-name" name="last-name"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                            required />
                    </div>
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input type="email" id="email" name="email"
                        class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                        required />
                </div>
                <div class="mb-4">
                    <label for="subject" class="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <input type="text" id="subject" name="subject"
                        class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                        required />
                </div>
                <div class="mb-4">
                    <label for="message" class="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea id="message" name="message"
                        class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                        rows="4" required></textarea>
                </div>
                <button type="submit"
                    class="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700">Submit</button>
            </form>
        </div>`
    },
    {
        title: "Register Form",
        component: (
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Register</h2>
                <form action="#" method="POST" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="username" className="block text-gray-700 dark:text-gray-300 mb-2">Username</label>
                            <input type="text" id="username" name="username"
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                                required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <input type="email" id="email" name="email"
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                                required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
                            <input type="password" id="password" name="password"
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                                required />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirm-password"
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                                required />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                        <input type="text" id="phone" name="phone"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 dark:text-gray-300 mb-2">Address</label>
                        <input type="text" id="address" name="address"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="country" className="block text-gray-700 dark:text-gray-300 mb-2">Country</label>
                            <select id="country" name="country"
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600">
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">UK</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="state" className="block text-gray-700 dark:text-gray-300 mb-2">State</label>
                            <input type="text" id="state" name="state"
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600" />
                        </div>
                    </div>
                    <button type="submit"
                        className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700">Register</button>
                </form>
            </div>
        ),
        code: `<div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Register</h2>
            <form action="#" method="POST" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label for="username" class="block text-gray-700 dark:text-gray-300 mb-2">Username</label>
                        <input type="text" id="username" name="username"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                            required />
                    </div>
                    <div>
                        <label for="email" class="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" name="email"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                            required />
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label for="password" class="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
                        <input type="password" id="password" name="password"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                            required />
                    </div>
                    <div>
                        <label for="confirm-password" class="block text-gray-700 dark:text-gray-300 mb-2">Confirm
                            Password</label>
                        <input type="password" id="confirm-password" name="confirm-password"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                            required />
                    </div>
                </div>
                <div class="mb-4">
                    <label for="phone" class="block text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                    <input type="text" id="phone" name="phone"
                        class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600" />
                </div>
                <div class="mb-4">
                    <label for="address" class="block text-gray-700 dark:text-gray-300 mb-2">Address</label>
                    <input type="text" id="address" name="address"
                        class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600" />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label for="country" class="block text-gray-700 dark:text-gray-300 mb-2">Country</label>
                        <select id="country" name="country"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600">
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">UK</option>
                            <option value="Australia">Australia</option>
                        </select>
                    </div>
                    <div>
                        <label for="state" class="block text-gray-700 dark:text-gray-300 mb-2">State</label>
                        <input type="text" id="state" name="state"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600" />
                    </div>
                </div>
                <button type="submit"
                    class="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700">Register</button>
            </form>
        </div>`
    },
    {
        title: "Login Form",
        component: (
            <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 mb-8">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Newsletter Signup</h2>
                <form action="#" method="POST" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label for="first-name" class="block text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                            <input type="text" id="first-name" name="first-name"
                                class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                                required />
                        </div>
                        <div>
                            <label for="last-name" class="block text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                            <input type="text" id="last-name" name="last-name"
                                class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                                required />
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" name="email"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                            required />
                    </div>
                    <div class="mb-4">
                        <label for="preferences" class="block text-gray-700 dark:text-gray-300 mb-2">Preferences</label>
                        <select id="preferences" name="preferences"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                            required>
                            <option value="">Select preferences</option>
                            <option value="news">News</option>
                            <option value="updates">Updates</option>
                            <option value="offers">Special Offers</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 dark:text-gray-300 mb-2">Receive Updates Via</label>
                        <div class="flex items-center mb-2">
                            <input type="checkbox" id="email-updates" name="updates-via" value="email"
                                class="mr-2 focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <label for="email-updates" class="text-gray-700 dark:text-gray-300">Email</label>
                        </div>
                        <div class="flex items-center mb-2">
                            <input type="checkbox" id="sms-updates" name="updates-via" value="sms"
                                class="mr-2 focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <label for="sms-updates" class="text-gray-700 dark:text-gray-300">SMS</label>
                        </div>
                        <div class="flex items-center mb-2">
                            <input type="checkbox" id="push-updates" name="updates-via" value="push"
                                class="mr-2 focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <label for="push-updates" class="text-gray-700 dark:text-gray-300">Push Notifications</label>
                        </div>
                    </div>
                    <div class="flex items-center justify-between rounded-lg border p-4">
                        <div class="space-y-0.5">
                            <label for="marketing-emails" class="text-base text-gray-700 dark:text-gray-300">Marketing Emails</label>
                            <p class="text-gray-600 dark:text-gray-400">Receive emails about new products, features, and more.</p>
                        </div>
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" id="marketing-emails" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                            <label for="marketing-emails" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                    <button type="submit"
                        class="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700">Sign
                        Up</button>
                </form>
            </div>
        ),
        code: 
`<div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 mb-8">
    <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Newsletter Signup</h2>
    <form action="#" method="POST" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
                <label for="first-name" class="block text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                <input type="text" id="first-name" name="first-name"
                    class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                    required />
            </div>
            <div>
                <label for="last-name" class="block text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                <input type="text" id="last-name" name="last-name"
                    class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                    required />
            </div>
        </div>
        <div class="mb-4">
            <label for="email" class="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input type="email" id="email" name="email"
                class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                required />
        </div>
        <div class="mb-4">
            <label for="preferences" class="block text-gray-700 dark:text-gray-300 mb-2">Preferences</label>
            <select id="preferences" name="preferences"
                class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                required>
                <option value="">Select preferences</option>
                <option value="news">News</option>
                <option value="updates">Updates</option>
                <option value="offers">Special Offers</option>
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 dark:text-gray-300 mb-2">Receive Updates Via</label>
            <div class="flex items-center mb-2">
                <input type="checkbox" id="email-updates" name="updates-via" value="email"
                    class="mr-2 focus:ring-blue-500 dark:focus:ring-blue-600" />
                <label for="email-updates" class="text-gray-700 dark:text-gray-300">Email</label>
            </div>
            <div class="flex items-center mb-2">
                <input type="checkbox" id="sms-updates" name="updates-via" value="sms"
                    class="mr-2 focus:ring-blue-500 dark:focus:ring-blue-600" />
                <label for="sms-updates" class="text-gray-700 dark:text-gray-300">SMS</label>
            </div>
            <div class="flex items-center mb-2">
                <input type="checkbox" id="push-updates" name="updates-via" value="push"
                    class="mr-2 focus:ring-blue-500 dark:focus:ring-blue-600" />
                <label for="push-updates" class="text-gray-700 dark:text-gray-300">Push Notifications</label>
            </div>
        </div>
        <div class="flex items-center justify-between rounded-lg border p-4">
            <div class="space-y-0.5">
                <label for="marketing-emails" class="text-base text-gray-700 dark:text-gray-300">Marketing
                    Emails</label>
                <p class="text-gray-600 dark:text-gray-400">Receive emails about new products, features, and more.</p>
            </div>
            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" id="marketing-emails"
                    class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                <label for="marketing-emails"
                    class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
        </div>
        <button type="submit"
            class="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700">Sign
            Up</button>
    </form>
</div>`,
        note:
            <Alert text={"The toggle switch is a custom checkbox styled with CSS. It can be used to replace the default checkbox input. You need to apply the following styles to your CSS file to make it work:"
            } code={
`.toggle-checkbox:checked {
    right: 0;
    border-color: #3b82f6;
}
        
.toggle-checkbox:checked+.toggle-label {
    background-color: #3b82f6;
}`
            } />
    }
];
export default formsComponents;




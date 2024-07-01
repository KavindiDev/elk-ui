import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }) {
    return (
        <div className="flex w-full md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <div>
                <Sidebar />
            </div>
            
            <div className="flex-1 relative xl:grid xl:grid-cols-[1fr_300px] bg-white dark:bg-gray-950">
                <div className="p-6">
                    {children}
                </div>
            </div>
            <Toaster />
        </div>
    )
}
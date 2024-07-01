import FeaturedComponents from "@/components/Featured";

export const metadata = {
    title: 'Explore Components - Elk/ui',
    description: 'Discover Elk/ui components, an open-source tailwind UI component library designed to simplify web development.'    
}

export default function componentsPage(){
    return (
        <div class="container mx-auto px-4 py-8">
            <FeaturedComponents />
        </div>
    );
}
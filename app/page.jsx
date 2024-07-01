import FeaturedComponents from "@/components/Featured";
import Hero from "@/components/Hero";
import Community from "@/components/Community";

export default function Home() {
    return (
        <main className="flex-1">
            <Hero />
            <FeaturedComponents />
            <Community />
        </main>
    );
}

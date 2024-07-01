import Codebox from "@/components/Codebox";
import Cards from "./cards";
import ContentPage from "@/components/ContentPage";

export const metadata = {
    title: 'Card Components - Elk/ui',
    description: 'Explore a variety of card styles for your Tailwind project.'
}

export default function CardPage() {
    return (
        <ContentPage title="Card Gallery" description="Explore a variety of card styles for your Tailwind project.">
            {
                Cards.map(function ({ title, component, code, note }) {
                    return (
                        <Codebox
                            title={title}
                            component={component}
                            code={code}
                            note={note}
                        />
                    );
                })
            }
        </ContentPage>
    );
}
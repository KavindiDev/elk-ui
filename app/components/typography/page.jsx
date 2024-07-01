import ContentPage from "@/components/ContentPage";
import Codebox from "@/components/Codebox";
import typoComponents from "./typograpies";

export const metadata = {
    title: 'Typography Components - Elk/ui',
    description: 'Explore a variety of typography styles for your Tailwind project.'
}

export default function TypoPage() {
    return (
        <ContentPage title="Typography Gallery" description="Explore a variety of typography styles for your Tailwind project.">
            {
                typoComponents.map(function ({ title, component, code, note }) {
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
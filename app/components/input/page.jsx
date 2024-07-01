import Codebox from "@/components/Codebox";
import ContentPage from "@/components/ContentPage";
import inputComponents from "./inputs";

export const metadata = {
    title: 'Input Components - Elk/ui',
    description: 'Explore a variety of input styles for your Tailwind project.'
}

export default function InputPage() {
    return (
        <ContentPage title="Input Gallery" description="Explore a variety of input styles for your Tailwind project.">
            {
                inputComponents.map(function ({ title, component, code, note }) {
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
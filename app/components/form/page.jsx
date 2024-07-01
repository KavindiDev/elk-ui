import ContentPage from "@/components/ContentPage";
import Codebox from "@/components/Codebox";
import formsComponents from "./forms";

export const metadata = {
    title: 'Form Components - Elk/ui',
    description: 'Explore a variety of form styles for your Tailwind project.'
}

export default function FormPage() {
    return (
        <ContentPage title="Form Gallery" description="Explore a variety of form styles for your Tailwind project.">
            {
                formsComponents.map(function ({ title, component, code, note }) {
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

import Codebox from "@/components/Codebox";
import Buttons from "./buttons";
import ContentPage from "@/components/ContentPage";

export const metadata = {
    title: 'Button Components - Elk/ui',
    description: 'Explore a variety of button styles for your Tailwind project.'
}

export default function BtnPage() {
    return (
        <ContentPage title="Button Gallery" description="Explore a variety of button styles for your Tailwind project.">
            {
                Buttons.map(function ({ title, component, code, note }) {
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
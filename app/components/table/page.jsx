import Codebox from "@/components/Codebox";
import ContentPage from "@/components/ContentPage";
import tableComponents from "./tables";

export const metadata = {
    title: 'Table Components - Elk/ui',
    description: 'Explore a variety of table styles for your Tailwind project.'
}

export default function TablePage() {
    return (
        <ContentPage title="Table Gallery" description="Explore a variety of table styles for your Tailwind project.">
            {
                tableComponents.map(function ({ title, component, code, note }) {
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
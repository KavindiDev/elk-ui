import ContributorCard from "./ContributorCard";
import ContributorsList from "./ContributorsList";

export default function Contributors() {
    return (
        <section className="text-center py-12">
            <h2 className="text-4xl font-bold mb-8">Contributors</h2>
            <div className="flex gap-8 flex-wrap justify-center">
                {
                    ContributorsList.map(function(contributor) {
                        return (
                            <ContributorCard
                                name={contributor.name}
                                role={contributor.role}
                                description={contributor.description}
                                image={contributor.image}
                                githubLink={contributor.githubLink}
                                twitterLink={contributor.twitterLink}
                            />
                        )
                    })
                }
            </div>
        </section>
    );
}
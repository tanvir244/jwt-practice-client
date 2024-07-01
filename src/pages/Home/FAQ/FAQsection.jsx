

const FAQsection = () => {
    return (
        <div className="my-16">
            <h2 className="text-center text-4xl font-bold mb-4">FAQ Section</h2>
            <div className="card-body">
                <div className="collapse collapse-plus bg-[#e5e6e6]">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Journalism and Diversity
                    </div>
                    <div className="collapse-content">
                        <p className="text-description-color">Diversity is essential for journalism to accurately reflect the complexity of society and provide inclusive storytelling. In this assignment, you will explore the importance of diversity in journalism, examining challenges, best practices, and the impact of diverse representation on media narratives and audience engagement.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#e5e6e6]">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Introduction to Diversity in Journalism
                    </div>
                    <div className="collapse-content">
                        <p className="text-description-color">Define diversity in the context of journalism, encompassing factors such as race, ethnicity, gender, sexuality, ability, religion, socioeconomic status, and geographic location.
                            Discuss the importance of diversity in newsrooms and media organizations for fostering inclusive storytelling, representing diverse perspectives, and enhancing audience engagement.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#e5e6e6]">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Challenges to Diversity in Journalism
                    </div>
                    <div className="collapse-content">
                        <p className="text-description-color">Identify systemic barriers and challenges that hinder diversity and inclusion in journalism, including lack of representation in newsrooms, unconscious bias, tokenism, and limited coverage of underrepresented communities.
                            Examine the impact of homogeneity in newsrooms on the framing of stories, the selection of sources, and the portrayal of marginalized groups in media narratives.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#e5e6e6]">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Intersectionality in Media Narratives
                    </div>
                    <div className="collapse-content">
                        <p className="text-description-color">Examine the intersectionality of identity and the complexities of representing diverse experiences in media narratives.
                            Highlight examples of intersectional storytelling that explore the overlapping dimensions of identity, privilege, and marginalization, challenging stereotypes and amplifying underrepresented voices.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#e5e6e6]">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Community Engagement and Empowermen
                    </div>
                    <div className="collapse-content">
                        <p className="text-description-color">Discuss the role of journalism in empowering marginalized communities, amplifying their stories, and fostering dialogue and understanding across diverse perspectives.
                            Explore community-driven journalism initiatives that prioritize collaboration, co-creation, and participatory storytelling, enabling communities to tell their own stories on their own terms.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#e5e6e6]">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Diversity in Coverage and Storytelling
                    </div>
                    <div className="collapse-content">
                        <p className="text-description-color">Analyze the importance of diverse coverage and storytelling approaches in journalism, including solutions journalism, cultural competency, and nuanced reporting on issues of race, gender, sexuality, and social justice.
                            Discuss the impact of diverse narratives on audience engagement, trust, and perceptions of media credibility and relevance.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQsection;
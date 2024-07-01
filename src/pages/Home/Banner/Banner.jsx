
const Banner = () => {
    return (
        <div className="hero w-full min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/PZgBscs/assignmentlad.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Do assignment by yourself</h1>
                    <p className="mb-5 w-full md:w-[540px] mx-auto">This assignment aims to investigate the intricate relationship between social media usage and mental health outcomes. Students will delve into various dimensions of this topic, examining both positive and negative effects on individuals psychological well-being. Through critical analysis of existing research, students will explore factors such as social comparison, cyberbullying, self-esteem, and identity formation influenced by social media platforms.</p>
                    <button className="btn bg-black text-white border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
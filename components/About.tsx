import { Balancer } from "react-wrap-balancer";

const About = () => {
    return (
        <>
            <section
                id="about"
                className=" min-h-[600px] container  space-y-16 p-6  justify-center items-center flex flex-col  ">
                <p className="w-full text-left sm:text-center mt-4  text-4xl font-extrabold tracking-tigh dark:bg-gradient-to-b dark:from-white dark:to-[#adadad] bg-gradient-to-b from-[#555] to-[#000] text-transparent bg-clip-text">
                    Get to know me
                </p>
                <div className="max-w-2xl space-y-6 text-left sm:text-center text-lg  leading-[1.78]  text-zinc-700 dark:text-[#888]">
                    <Balancer>
                        <div className="sm:w-full">
                            Hello there..! My name is Gagan Kumar, a passionate
                            and dedicated person having goals of making a
                            carrier in web development & design.
                        </div>
                        <div>
                            With a Master of Computer Applications (MCA) degree
                            from PES University, Bengaluru, I have a solid
                            foundation in programming and a keen eye for
                            creating visually stunning and user-friendly web
                            experiences.
                        </div>

                        <div>
                            Driven by a curiosity to stay ahead of industry
                            trends, I constantly expand my knowledge and embrace
                            new technologies. My motivation lies in solving
                            complex problems, implementing innovative ideas, and
                            delivering high-quality solutions that exceed client
                            expectations.
                        </div>
                    </Balancer>
                </div>
            </section>
        </>
    );
};

export default About;

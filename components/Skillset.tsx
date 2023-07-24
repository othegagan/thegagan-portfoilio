import SkillsLight from "@/public/skills-lightbg.png";
import SkillsDark from "@/public/skills-darkbg.png";
import SkillsLightLG from "@/public/skills-lightlg.png"
import SkillsDarkLG from "@/public/skills-darklg.png"
import Image from "next/image";
import Subheading from "./Subheading";

const Skillset = () => {
    return (
        <>
            <section
                id="about"
                className=" min-h-[400px] container  space-y-16 p-6 justify-center items-center  flex flex-col  ">

                <Subheading title="Skill set"/>

                <div className="flex justify-center items-center">


                <div className="hidden dark:flex justify-center items-center floating mx-auto">
                    <Image
                        src={SkillsLight}
                        alt="skills"
                        width={500}
                        height={500}
                        className="md:hidden -ml-5"
                    />

                    <Image
                        src={SkillsLightLG}
                        alt="skills"
                        width={800}
                        height={500}
                        className="hidden md:block"
                    />

                </div>

                <div className="flex justify-center items-center dark:hidden floating mx-auto">
                    <Image
                        src={SkillsDark}
                        alt="skills"
                        width={500}
                        height={500}
                        className="md:hidden -ml-5"
                    />

                    <Image
                        src={SkillsDarkLG}
                        alt="skills"
                        width={800}
                        height={500}
                        className="hidden md:block"
                    />

                </div>
                </div>

            </section>
        </>
    );
};

export default Skillset;

import SkillsLight from "@/public/skills-lightbg.png";
import SkillsDark from "@/public/skills-darkbg.png";
import SkillsLightLG from "@/public/skills-lightlg.png";
import SkillsDarkLG from "@/public/skills-darklg.png";
import Skills from "@/public/skills.svg"
import Image from "next/image";
import SeactionHeading from "./SeactionHeading";
import Icons from "@/utils/Icons";


const Skillset = () => {
    return (
        <>
            <section
                id="about"
                className=" min-h-[400px] container  space-y-16 p-6 justify-center items-center  flex flex-col  ">
                <SeactionHeading title="Skill set" />


                <div className="scale-[1.3] ">
                    <Icons />
                </div>


            </section>
        </>
    );
};

export default Skillset;

import SectionHeading from "./SeactionHeading";

const Education = () => {
    return (

        <section
            id="about"
            className=" py-10 md:py-20 container relative space-y-12 p-6  justify-center items-center flex flex-col  ">
            <SectionHeading title={` Education`} />
            <div className="container mx-auto flex flex-col items-center justify-center text-neutral-950 dark:text-neutral-300">
                <div className="  rounded-xl flex flex-col items-center justify-center gap-8 md:gap-10">

                    <div className="flex flex-col md:gap-16 lg:flex-row justify-end">
                        <div className="pl-3 lg:pl-0 border-l-2 lg:border-l-0 ">
                            <h5 className="text-lg text-base-content font-semibold">University of Toronto</h5>
                            <div className="flex items-center gap-4 mt-2 lg:mt-3">
                                <p className="text-xs font-medium text-foreground px-3 py-2 bg-secondary w-fit rounded-md">Jan 1016 - Dec 2021</p>
                            </div>
                        </div>
                        <div className="lg:w-[50%] border-l-0 lg:border-l-2 pl-3 border-zinc-800">
                            <h5 className="text-lg font-medium text-base-content">Certificate of web training</h5>
                            <p className="mt-2 lg:mt-4 w-[50ch]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc.</p>
                        </div>
                    </div>

                    <div className="flex flex-col  md:gap-16 lg:flex-row justify-end">
                        <div className="pl-3 lg:pl-0 border-l-2 lg:border-l-0 ">
                            <h5 className="text-lg text-base-content font-semibold">University of Toronto</h5>
                            <div className="flex items-center gap-4 mt-2 lg:mt-3">
                                <p className="text-xs font-medium text-foreground px-3 py-2 bg-secondary w-fit rounded-md">Jan 1016 - Dec 2021</p>
                            </div>
                        </div>
                        <div className="lg:w-[50%] border-l-0 lg:border-l-2 pl-3 border-zinc-800">
                            <h5 className="text-lg font-medium text-base-content">Certificate of web training</h5>
                            <p className="mt-2 lg:mt-4 w-[50ch]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc.</p>
                        </div>
                    </div>
                    <div className="flex flex-col  md:gap-16 lg:flex-row justify-end">
                        <div className="pl-3 lg:pl-0 border-l-2 lg:border-l-0 ">
                            <h5 className="text-lg text-base-content font-semibold">University of Toronto</h5>
                            <div className="flex items-center gap-4 mt-2 lg:mt-3">
                                <p className="text-xs font-medium text-foreground px-3 py-2 bg-secondary w-fit rounded-md">Jan 1016 - Dec 2021</p>
                            </div>
                        </div>
                        <div className="lg:w-[50%] border-l-0 lg:border-l-2 pl-3 border-zinc-800">
                            <h5 className="text-lg font-medium text-base-content">Certificate of web training</h5>
                            <p className="mt-2 lg:mt-4 w-[50ch]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc.</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>

    )
}

export default Education
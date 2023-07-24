interface props {
    title: string;
}

const Subheading = ({ title }: props) => {
    return (
        <p className="w-full text-center  mt-4  text-4xl font-extrabold tracking-tigh dark:bg-gradient-to-b dark:from-white dark:to-[#adadad] bg-gradient-to-b from-[#555] to-[#000] text-transparent bg-clip-text">
            {title}
        </p>
    );
};

export default Subheading;

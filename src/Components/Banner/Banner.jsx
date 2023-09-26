

const Banner = () => {
    return (
        <div className="pt-32 w-[95%] mx-auto flex flex-col justify-center items-center space-y-6">
            <h1 className=" text-3xl text-center md:text-5xl font-bold">I Grow By Helping People In Need</h1>
            <div className="relative">
            <input className="px-4 py-2 rounded-l-md" placeholder="Search catagory" type="text" />
            <input className=" py-2 rounded-r-md text-white font-semibold px-4 bg-red-500" type="button" value="Search" />
            </div>
        </div>
    );
};

export default Banner;
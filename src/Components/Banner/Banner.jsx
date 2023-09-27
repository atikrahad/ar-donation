

const Banner = ({handleCatagorySearch, handleSearchClick}) => {
    
    
  return (
    <div className="pt-32 w-[95%] mx-auto flex flex-col justify-center items-center space-y-6">
      <h1 className=" text-3xl text-center md:text-5xl font-bold">
        I Grow By Helping People In Need
      </h1>
      <form onSubmit={handleCatagorySearch} className="relative">
        <input
          onChange={handleSearchClick}
          className="px-4 py-2 outline-none rounded-l-md"
          placeholder="Search catagory"
          type="text"
          name="catagory"
          
        />
        <input
          
          className=" py-2 rounded-r-md text-white font-semibold px-4 bg-red-500"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};

export default Banner;

import PropTypes from 'prop-types'

const Banner = ({handleCatagorySearch, handleSearchClick}) => {
    
    
  return (
    <div className="md:pt-16 w-[95%] md:w-full mx-auto flex flex-col justify-center items-center space-y-6">
      <h1 className=" text-3xl text-center  md:text-4xl font-bold">
        I Grow By Helping People In Need
      </h1>
      <form onSubmit={handleCatagorySearch} className="relative">
        <input
          onChange={handleSearchClick}
          className="px-4 bg-slate-200 py-2 outline-none rounded-l-md"
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
Banner.propTypes = {
    handleCatagorySearch: PropTypes.func.isRequired,
    handleSearchClick: PropTypes.func.isRequired
}
export default Banner;

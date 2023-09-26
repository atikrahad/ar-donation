import PropTypes from 'prop-types'
const Doneted = ({ data }) => {
  const {
    img,
    Title,
    Category,
    Category_BG_Color,
    Card_BG_Color,
    Text_Button_BG_Color,
    Price,
  } = data;
  
  return (
    <div style={{backgroundColor:Card_BG_Color}} className="card rounded-xl card-side bg-base-100 shadow-xl">
      
        <img className="w-40 rounded-l-xl h-full" src={img} alt="Movie" />
      
      <div className="p-3">
        <button style={{backgroundColor:Text_Button_BG_Color, color:Category_BG_Color}} className=" cursor-default px-4 font-medium rounded-md py-1">{Category}</button>
        <h2 className="font-semibold  text-xl">{Title}</h2>
        <p style={{color:Category_BG_Color }} className="font-semibold">${Price}</p>
        <div className="card-actions">
          <button style={{backgroundColor: Category_BG_Color, color: "white"}} className="py-1 rounded-md px-4">View Details</button>
        </div>
      </div>
    </div>
  );
};

Doneted.propTypes = {
    data: PropTypes.object.isRequired
}
export default Doneted;

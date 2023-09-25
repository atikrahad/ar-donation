import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';



const HomeDonationCard = ({ catagory}) => {
  const {
    Title,
    Category,
    img,
    Category_BG_Color,
    
    Card_BG_Color,
    Text_Button_BG_Color,
  } = catagory;
  
  const navigate = useNavigate()
  const handleClickcardData = (catagory) => {
    navigate("/selectcard", {state: catagory})
  }
  

  return (
    <div onClick={()=>handleClickcardData(catagory)} style={{backgroundColor: Card_BG_Color}} className="card card-compact   shadow-xl">
      <figure>
        <img className="w-full h-44"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="p-4">
        <button style={{backgroundColor: Text_Button_BG_Color, color:Category_BG_Color}} className=" py-2 opacity-90 shadow-md rounded-lg font-medium px-4">{Category}</button>
        <h2 style={{color:Category_BG_Color}} className="card-title">{Title}</h2>
    
      </div>
    </div>
  );
};
HomeDonationCard.propTypes = {
    catagory: PropTypes.object.isRequired,
    handleClickcardData: PropTypes.func.isRequired
}
export default HomeDonationCard;

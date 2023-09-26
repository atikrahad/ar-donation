import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../Navber/Nav";
import { setData } from "../../utilitis/utlitis";


const Selectcard = () => {
  const location = useLocation();
  const selectData = location.state;
  
  const {
    Title,

    img,
    Category_BG_Color,
    Description,
    Price,
  } = selectData;

  
  const navigate = useNavigate()
  
  const handleClickDonated = () => {
    navigate('/donation',)
    setData(selectData.id)
    
  }


  return (
    <div>
      <Nav></Nav>
      <div className="w-[95%] md:w-[80%] py-6 mx-auto">
        <div className="relative">
          <img className="  h-[80vh] rounded-md w-full" src={img} alt="" />
          <div className="bg-black rounded-b-md w-full h-16 absolute bottom-0 opacity-40"></div>
          <button
            onClick={handleClickDonated}
            style={{ backgroundColor: Category_BG_Color, color: "white" }}
            className="absolute rounded-md font-medium m-3 py-2 px-4 bottom-0"
          >
            Donate ${Price}
          </button>
        </div>
        <h1 className="font-bold text-2xl md:text-4xl pt-6 text-[#0B0B0B]">
          {Title}
        </h1>
        <p className="text-justify py-2 text-[#0b0b0bb3]">{Description}</p>
      </div>
    </div>
  );
};

export default Selectcard;

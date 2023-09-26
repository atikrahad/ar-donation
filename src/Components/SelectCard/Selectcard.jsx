import { useLocation, } from "react-router-dom";
import Nav from "../Navber/Nav";
import { getStored, setData } from "../../utilitis/utlitis";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


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

  
  
  
  
  
  const storedData = getStored();
  const finded = storedData.find(data => data ===selectData.id);
  const handleClickDonated = () => {
    
    if(!finded){
        
        toast.success('❤️Donate sucsessfull', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        setData(selectData.id)
    }else{
        
        toast.warn('Already Donated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
       
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Selectcard;

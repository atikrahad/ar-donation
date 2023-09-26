import Nav from "../Navber/Nav";
import { useEffect, useState } from "react";
import { getStored } from "../../utilitis/utlitis";
import Doneted from "../Doneted/Doneted";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [doneted, setDoneted] = useState([]);
  const [openall, setOpenall] = useState('false')

  useEffect(() => {
    fetch("Public.json")
      .then((res) => res.json())
      .then((data) => setDonation(data));
  }, []);

  useEffect(() => {
    const id = getStored();

    const newarrData = [];
    for (let item of id) {
      const finded = donation.find((data) => data.id === item);
      if (finded) {
        newarrData.unshift(finded);
      }
    }
    console.log(newarrData);
    setDoneted(newarrData);
  }, [donation]);
    
  const handleClickSeeall = () => {
        setOpenall(true);
  };


  return (
    <div>
      <Nav></Nav>
      <div className="w-[80%] py-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {
            openall===true?  doneted.map((data) => (
                <Doneted key={data.id} data={data}></Doneted>
              )) : doneted.slice(0, 4).map((data) => (
                <Doneted key={data.id} data={data}></Doneted>
              )) 
        }
      </div>
      <div className="flex items-center py-6 justify-center">
        <button
          onClick={handleClickSeeall}
          className={`bg-[#009444] ${openall === true || doneted.length<4? 'hidden':''} rounded-md text-white font-medium py-2 px-4`}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donation;

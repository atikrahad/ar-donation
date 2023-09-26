import { useEffect, useState } from "react";
import HomeDonationCard from "../HomeDonationCard/HomeDonationCard";


const Home = () => {
    const [catagorycard, setCatagorycard] = useState([]);
    useEffect(()=>{
        fetch('Public.json')
        .then(res => res.json())
        .then(data => setCatagorycard(data))
    },[])
    
    return (
        <div >
            
            <div className="w-[95%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
            {
                catagorycard.map(catagory => <HomeDonationCard  key={catagory.id} catagory={catagory}></HomeDonationCard>)
            }
        </div>
        </div>
    );
};

export default Home;
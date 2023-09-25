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
        <div className="md:w-[85%] mx-auto grid grid-cols-4 gap-4 py-10">
            {
                catagorycard.map(catagory => <HomeDonationCard key={catagory.id} catagory={catagory}></HomeDonationCard>)
            }
        </div>
    );
};

export default Home;
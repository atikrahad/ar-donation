import {  useEffect, useState } from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";


const Root = () => {
    const [loaddata, setLoaddata] = useState([])
    const [userdata, setUserdata] = useState('');
    const [filteringdata, setFilteringdata] = useState([]);


    useEffect(()=>{
        fetch('Public.json')
        .then(res => res.json())
        .then(data => setLoaddata(data))
    },[])

    const handleSearchClick = e =>{
        setUserdata(e.target.value)
    }
    
    const handleCatagorySearch = e => {
        e.preventDefault();
        const filterdata = loaddata.filter(data => data.Category.toLowerCase() === userdata.toLowerCase())
        setFilteringdata(filterdata)
        e.target.catagory.value = ''
    }

    
    return (
        <div>
            
            <Header handleSearchClick={handleSearchClick} handleCatagorySearch={handleCatagorySearch} ></Header>
            <Home filteringdata={filteringdata}></Home>
            
        </div>
    );
};

export default Root;
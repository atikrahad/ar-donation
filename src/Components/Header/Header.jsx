import Banner from "../Banner/Banner";
import Nav from "../Navber/Nav";
import './Header.css'

const Header = ({handleCatagorySearch, handleSearchClick}) => {
    return (
        <div className="header overlay  h-[80vh]">
            <Nav></Nav>
            <div className="flex items-center justify-center">
                <div>
                    <Banner handleSearchClick={handleSearchClick} handleCatagorySearch={handleCatagorySearch}></Banner>
                </div>
            </div>
        </div>
    );
};

export default Header;
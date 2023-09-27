import Banner from "../Banner/Banner";
import Nav from "../Navber/Nav";
import './Header.css'
import PropTypes from 'prop-types' 

const Header = ({handleCatagorySearch, handleSearchClick}) => {
    return (
        <div style={{}} className="header overlay  h-[60vh]">
            <Nav></Nav>
            <div className="flex items-center justify-center">
                <div>
                    <Banner handleSearchClick={handleSearchClick} handleCatagorySearch={handleCatagorySearch}></Banner>
                </div>
            </div>
        </div>
    );
};
Header.propTypes = {
    handleCatagorySearch: PropTypes.func.isRequired,
    handleSearchClick: PropTypes.func.isRequired
}
export default Header;
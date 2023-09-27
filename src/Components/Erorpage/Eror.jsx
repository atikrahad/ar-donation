import { NavLink } from "react-router-dom";


const Eror = () => {
    return (
        <div className="flex space-y-3 h-[100vh] items-center justify-center flex-col">
            <h1 className="text-8xl font-semibold">404</h1>
            <h2 className="text-2xl text-center font-medium">Opps! You have searched Page is not found</h2>
            <NavLink className={`bg-sky-400 text-white font-semibold py-2 px-4 rounded-md`} to={'/'}>Go back home</NavLink>
        </div>
    );
};

export default Eror;
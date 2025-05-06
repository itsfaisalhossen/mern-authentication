import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { TbLogout2 } from "react-icons/tb";

const Navbar = () => {
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContext);

  const navigate = useNavigate();

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`);

      data.success && toast.success(data.message);
      data.success && setIsLoggedin(false);
      data.success && setUserData(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
      <img src={assets.logo} alt="Logo" className="w-28 sm:w-32" />
      {userData ? (
        <div className="bg-indigo-700 p-2 flex rounded-full w-10 h-10 items-center relative group text-white justify-center">
          {userData.name[0].toUpperCase()}
          <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black roundedt transition pt-10">
            <ul className="list-none m-0 p-2 bg-gray-100 text-sm rounded transition">
              <li
                onClick={logout}
                className="py-2 flex gap-1.5 items-center text-[18px] from-bold px-4 hover:bg-indigo-600 hover:text-white cursor-pointer rounded-2xl transition"
              >
                Logout <TbLogout2 />
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Link to="/login">
          <button className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition">
            Login <img src={assets.arrow_icon} alt="Arrow icon" />
          </button>
        </Link>
      )}
    </div>
  );
};
export default Navbar;

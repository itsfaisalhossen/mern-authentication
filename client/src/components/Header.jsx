import { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { userData, backendUrl } = useContext(AppContext);
  const navigate = useNavigate();

  const sendVerificatoinOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        `${backendUrl}/api/auth/send-verify-otp`
      );
      if (data.success) {
        toast.success(data.message);
        navigate("/email-verify");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-20 px-4 text-center text-gray-800">
      <img
        className="w-36 h-36 rounded-full"
        src={assets.header_img}
        alt="Header_bg"
      />
      <h1 className="text-xl flex items-center gap-2 sm:text-3xl font-medium mb-2">
        Hay {userData ? userData.name : "Developer"}!{" "}
        <img className="w-8" src={assets.hand_wave} alt="Hand_wave" />
      </h1>
      <h2 className="text-3xl sm:text-5xl font-semibold mb-4">
        Welcome to our app
      </h2>
      <p className="mb-8 max-w-md">
        Let's satrt with a quick product tour and we will have you up and
        running in no time!
      </p>
      {userData && (
        <button
          onClick={sendVerificatoinOtp}
          className="px-6 hover:bg-gray-200 cursor-pointer text-lg py-2 transition border border-indigo-500 rounded-full"
        >
          {userData.isAccountVerified
            ? "Account Verified 🤗"
            : "Verify Your Email"}
        </button>
      )}
    </div>
  );
};
export default Header;

import { Footer } from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/bg_img.png')] bg-cover bg-center">
        <Navbar />
        <Header />
      </div>
      <Footer />
    </div>
  );
};
export default Home;

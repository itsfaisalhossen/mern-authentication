import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export const Footer = () => {
  return (
    <footer className="rounded-lg sm:p-6 sm:px-24 mt-12">
      <div className="w-full mx-auto p-4 md:py-8">
        <div className="sm:flex text-center items-center justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={assets.logo} className="h-8" alt="Auth Logo" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto text-center lg:my-8" />
        <span className="block text-sm text-gray-600 sm:text-center">
          © 2025 Mern-Authentication. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

import { CiMail } from "react-icons/ci";
import {
  FaDribbble,
  FaFacebook,
  FaSquareInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import NavMenu from "../shared/NavigationMenu";
import IconLink from "../shared/IconLink";
const iconlist = [
  {
    icon: <FaFacebook />,
    href: "#",
  },
  {
    icon: <FaSquareInstagram />,
    href: "#",
  },
  {
    icon: <FaYoutube />,
    href: "#",
  },
  {
    icon: <FaDribbble />,
    href: "#",
  },
];
const Topbar = () => {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-2 text-gray-600 bg-gray-100">
      <div className="hidden lg:flex gap-5">
        <p className="flex gap-2 items-center">
          <span className="text-lg">
            <MdWifiCalling3 />
          </span>
          <span>+977 9865410800</span>
        </p>
        <p className="flex gap-2 items-center">
          <span className="text-lg">
            <CiMail />
          </span>
          <span>furniture@demo.com</span>
        </p>
      </div>
      <div className="flex gap-2 items-center mx-auto lg:mx-0">
        <p>
          Free shipping on all orders over{" "}
          <span className="underline">$79</span>
        </p>

        <button className="p-1 bg-[#BA933E] rounded text-white hover:bg-black font-semibold">
          Shop <span className="hidden sm:inline">Now</span>!
        </button>
      </div>
      <div className="hidden xl:flex gap-6 items-center">
        <NavMenu
          title="English"
          list={[
            {
              href: "#",
              label: "English",
            },
            {
              href: "#",
              label: "Nepali",
            },
            {
              href: "#",
              label: "Hindi",
            },
            {
              href: "#",
              label: "Turkish",
            },
            {
              href: "#",
              label: "Aarab",
            },
          ]}
        />
        <NavMenu
          title="USD"
          list={[
            {
              href: "#",
              label: "USD",
            },
            {
              href: "#",
              label: "EUR",
            },
          ]}
        />

        <div className="flex gap-5 items-center text-lg">
          {iconlist.map((item, index) => (
            <IconLink key={index} href={item.href} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;

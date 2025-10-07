import { useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import { Heart, Menu, Search, ShoppingCart } from "lucide-react";

const navs = [
  { text: "Home", link: "/" },
  { text: "Contact", link: "/contact" },
  { text: "About", link: "/about" },
  { text: "Sign Up", link: "/signup" },
];

const Header = () => {
  const [active, setActive] = useState(0);

  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <AnnouncementBar
        title="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
        Button={<ShopNow />}
      />

      <div className="border-b border-gray-200 lg:pt-10 lg:pb-4 py-6 relative">
        <div className="max-container">
          <div className="flex items-center justify-between">
            <div className="xl:text-2xl text-xl font-bold">Exclusive</div>
            {isNavOpen && <NavMobile />}
            <Menu
              onClick={() => [setIsNavOpen(!isNavOpen)]}
              className="cursor-pointer lg:hidden"
            />
            <div className="flex gap-16 max-lg:hidden">
              {navs.map((item, i) => (
                <a
                  onClick={() => {
                    // we can get url link then assign active to the current link, should use react router
                    setActive(i);
                  }}
                  key={i}
                  className={`block font-light hover:border-b text-md ${
                    active === i ? "border-b" : ""
                  }`}
                  href={item.link}
                >
                  {item.text}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-8  max-lg:hidden">
              <div className="flex items-center bg-secondary rounded-md">
                <input
                  className="text-sm w-56"
                  placeholder="What are you looking for?"
                  type="text"
                />
                <div className="px-2">
                  <Search strokeWidth={1.2} />
                </div>
              </div>
              <Heart strokeWidth={1.2} size={30} />
              <ShoppingCart strokeWidth={1.2} size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavMobile = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="lg:hidden absolute top-full shadow-md rounded-lg p-5 left-0 w-full">
      <div className="flex flex-col gap-3">
        {navs.map((item, i) => (
          <a
            onClick={() => {
              // we can get url link then assign active to the current link, should use react router
              setActive(i);
            }}
            key={i}
            className={`block font-light border-secondary p-2 rounded-md text-md ${
              active === i ? "border" : ""
            }`}
            href={item.link}
          >
            {item.text}
          </a>
        ))}
      </div>
      <div className="mt-5 flex sm:items-center justify-between max-sm:flex-col max-sm:gap-5">
        <div className="flex justify-between items-center bg-secondary rounded-md">
          <input
            className="text-sm w-56"
            placeholder="What are you looking for?"
            type="text"
          />
          <div className="px-2">
            <Search strokeWidth={1.2} />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Heart strokeWidth={1.2} size={30} />
          <ShoppingCart strokeWidth={1.2} size={30} />
        </div>
      </div>
    </div>
  );
};
const ShopNow = () => {
  return <div className="underline">ShopNow</div>;
};

export default Header;

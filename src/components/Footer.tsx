import {
  Mail,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

import apple_store from "../assets/apple_store.png";
import google_play from "../assets/google_play.png";
import qrcode from "../assets/qrcode.jpg";
const Footer = () => {
  const footerNavs = [
    {
      title: "Account",
      links: [
        { title: "My Account", href: "#" },
        { title: "Login / Register", href: "#" },
        { title: "Cart", href: "#" },
        { title: "Wishlist", href: "#" },
        { title: "Shop", href: "#" },
      ],
    },
    {
      title: "Quick Link",
      links: [
        { title: "Privacy Policy", href: "#" },
        { title: "Terms Of Use", href: "#" },
        { title: "FAQ", href: "#" },
        { title: "Contact", href: "#" },
      ],
    },
  ];
  return (
    <div className="bg-dark">
      <footer className=" text-white py-12 max-container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Exclusive</h3>
            <p className="mb-3">Subscribe</p>
            <p className="text-sm mb-4">Get 10% off your first order</p>
            <div className="flex items-center border border-gray-500 rounded-md pr-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-sm flex-1 placeholder-gray-400"
              />
              <Send size={25} className="text-gray-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <p className="text-sm leading-6 text-gray-400">
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </p>
            <p className="mt-3 text-sm text-gray-400">exclusive@gmail.com</p>
            <p className="mt-2 text-sm text-gray-400">+88015-88888-9999</p>
          </div>

          {footerNavs.map((item, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {item.links.map((item, i) => (
                  <li key={i}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
    
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Download App</h3>
            <div className="mt-10">
              <p className="text-sm text-gray-400 mb-3">
                Save $3 with App New User Only
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <img
                    src={qrcode}
                    alt="QR Code"
                    className="w-[250px] object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <img src={google_play} alt="Google Play" />
                  <img src={apple_store} alt="App Store" />
                </div>
              </div>
            </div>
            <div className="flex xl:gap-8 gap-4 mt-8">
              <Facebook className="size-5 text-white hover:text-white cursor-pointer" />
              <Twitter className="size-5 text-white hover:text-white cursor-pointer" />
              <Instagram className="size-5 text-white hover:text-white cursor-pointer" />
              <Linkedin className="size-5 text-white hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 py-4">
        © Copyright Rimel 2022. All right reserved
      </div>
    </div>
  );
};

export default Footer;

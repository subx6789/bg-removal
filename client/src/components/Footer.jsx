import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
      <img width={150} src={assets.logo} alt="logo" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @Subhajit Sarkar | All rights reserved.
      </p>
      <div className="flex gap-1">
        <a href="https://www.facebook.com">
          <img width={40} src={assets.facebook_icon} alt="facebook" />
        </a>
        <a href="https://www.x.com">
          <img width={40} src={assets.twitter_icon} alt="twitter" />
        </a>
        <a href="https://www.google.com">
          <img width={40} src={assets.google_plus_icon} alt="gplus" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

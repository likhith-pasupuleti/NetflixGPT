import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 z-40">
      <img className="w-64" src={LOGO_URL} alt="logo" />
    </div>
  );
};
export default Header;

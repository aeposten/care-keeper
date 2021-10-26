import NavBar from "./Navbar";

const Header = ({ search, handleSearch }) => {
  return (
    <>
      <NavBar search={search} handleSearch={handleSearch} />
    </>
  );
};

export default Header;

import Search from "./Search";
const NavBar = ({ search, handleSearch }) => {
  return (
    <nav>
      <ul className="nav">
        <li className="title">Care Keeper</li>
        <li>Add a Pet</li>
        <li>
          <Search search={search} handleSearch={handleSearch} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

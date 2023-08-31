const Navbar = () => {
  return (
    <div className="topnav" style={{ maxHeight: "100px " }}>
      <div className="navlogo flex items-center">
        <img
          className="tttlogo"
          src="/cross.png"
          alt="logo"
          style={{
            height: "50px",
            paddingRight: "6px",
            verticalAlign: "middle",
          }}
        />
        <div className=" relative inline-block">
          <a
            href="https://github.com/romannjoroge/A2SVTeamDataSpies"
            target="_blank"
            className="underline_on_hover"
          >
            MediGuide
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;

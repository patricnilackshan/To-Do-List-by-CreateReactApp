function Header({ title }) {
  return (
    <header>
      <h1>{title} TO Do List</h1>
    </header>
  );
}

Header.defaultProps = { title: "Your" };

export default Header;

import Container from "components/Container";

import styles from "./Header.module.scss";

const Header = ({ children }) => {
  return (
    <header className="mt-8">
      <Container fluid>{children}</Container>
    </header>
  );
};

export default Header;

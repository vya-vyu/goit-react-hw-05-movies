// import { NavLink } from 'react-router-dom';
// import s from './Header.module.css';
// import { NavItem } from './Header.styled';
// import styled from 'styled-components';
import { Header, NavList, NavItem } from './Header.styled';

const HeaderPage = () => {
  return (
    <Header>
      <NavList>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </NavList>
    </Header>
  );
};

export default HeaderPage;

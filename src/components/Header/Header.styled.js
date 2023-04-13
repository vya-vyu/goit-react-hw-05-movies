import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  :hover {
    color: darkgrey;
  }
  &.active {
    text-decoration: none;
    color: red;
  }
`;
export const NavList = styled.nav`
  display: flex;
  gap: 10px;
`;

export const Header = styled.header`
  padding: 20px 40px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.56);
`;

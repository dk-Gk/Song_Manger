import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { StyledNavLink } from '../styles/StyledComponents';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { logoutStart } from '../features/auth/authSlice';
import logo from '../assets/mylogo2.png'

const Button = styled.button`
  background: transparent;
  background-color: #929496;
  color: #111010;
  font-size: 15pt;
  font-weight: 500;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
`;

const HeaderContainer = styled.div`
 background: #fff;
   border-bottom: 1px;
  color: #1b1919;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 30px;
  font-weight: bold;
`;

const AuthLinks = styled.div`
  margin-left: auto;
  margin-right: 20px;
`;

const AuthLink = styled(StyledNavLink)`
  margin-left: 20px;
  text-decoration: none;
  list-style: none;
`;
const UserStyle = styled.span`
  font-size: 15pt;
`;

const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  background-color: #aaa39a;
`

const Header: React.FC = () => {
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logoutStart());
    navigate('/login');
  }
  return (
    <HeaderContainer>
      <Logo>
        <LogoImg src={logo}/>
        <span>Songify</span>
      </Logo>
      <AuthLinks>
        {user ? (
          <>
            <UserStyle>{user.username}</UserStyle>
            <Button onClick={logoutHandler}>Logout</Button>
          </>
        ) : (
          <>
            <AuthLink to="/login">Sign In</AuthLink>
            <AuthLink to="/register">Sign Up</AuthLink>
          </>
        )}

        {/* <Button primary>Button</Button> */}
      </AuthLinks>
    </HeaderContainer>
  );
};

export default Header;

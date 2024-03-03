// components/Header.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { StyledNavLink } from '../styles/StyledComponents';
import { boxShadow } from '../styles/commonStyle';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { logoutStart } from '../features/auth/authSlice';

const Button = styled.button<{ primary?: boolean }>`
  background-color: ${props => (props.primary ? 'blue' : 'white')};
  color: ${props => (props.primary ? 'white' : 'black')};
  padding: 10px 20px;
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
  font-size: 1.5rem;
  font-weight: bold;
`;

const AuthLinks = styled.div`
  margin-left: auto;
  margin-right: 20px;
`;

const AuthLink = styled(StyledNavLink)`
  /* color: #c2b9b9; */
  margin-left: 20px;
  text-decoration: none;
  list-style: none;
`;

const Header: React.FC = () => {
  const user = useAppSelector(state => state.auth.user);
  const loading = useAppSelector(state => state.auth.isLoading);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logoutStart());
        navigate('/login');
  }
  return (
    <HeaderContainer>
      <Logo>Songify</Logo>
      <AuthLinks>
        {user ? (
          <>
          <span>{user.username}</span>
          <Button onClick={logoutHandler} primary>Logout</Button>
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

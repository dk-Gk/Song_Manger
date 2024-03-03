import styled from '@emotion/styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutStart } from '../features/auth/authSlice';
import { NavigationItem, NavigationList, StyledNavLink } from '../styles/StyledComponents';

const SidebarContainer = styled.div`
  width: 200px;
  height: 100%;
  background-color: #333;
  color: #fff;
  position: fixed;
  left: 0;
`;

const Navigate = styled(StyledNavLink)`
     color: #dad2d2;
     &:hover {
    color: #fff4f4;
  }
  &.active {
    color: #ffffff;
    font-weight: bolder;
  }
`
const Item = styled(NavigationItem)`
    margin-top: 30px;
    margin-right: 50px;
`
const UserSection = styled.div`
  position: absolute;
  bottom: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 70px;
`

const USerBtn = styled.p`
  cursor: pointer;
  font-size: 20px;
  color: #dad2d2;
     &:hover {
    color: #fff4f4;
  }
  &.active {
    color: #ffffff;
    font-weight: bolder;
  }
`

const SidebarComponent: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logoutStart());
    navigate('/login');
  }

  return (
    <SidebarContainer>
      <NavigationList column>
        <Item>
          <Navigate to="/dashboard/songs">My Songs</Navigate>
        </Item>
        <Item>
          <Navigate to="/dashboard/allsongs">All Songs</Navigate>
        </Item>
        <Item>
          <Navigate to="/dashboard/statistics">Statistics</Navigate>
        </Item>
      </NavigationList>
      <UserSection>
        <USerBtn onClick={() => navigate('/dashboard/profile')}>Profile</USerBtn>
        <USerBtn onClick={logoutHandler}>LogOut</USerBtn>
      </UserSection>
    </SidebarContainer>
  );
};

export default SidebarComponent;

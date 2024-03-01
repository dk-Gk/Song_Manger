// components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, NavigationItem, NavigationList, StyledNavLink } from '../styles/StyledComponents';

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
    /* font-size: 20pt; Change font size when active */
    font-weight: bolder;
  }
`
const Item = styled(NavigationItem)`
    margin-top: 30px;
    margin-right: 50px;
    /* border-bottom: 1px solid #fff4f4;; */
`
const UserSection = styled.div`
  /* position: absolute; */
  bottom: 10px;
  display: flex;
  flex-direction: column;
`

const SidebarComponent: React.FC = () => {
  return (
    <SidebarContainer>
      <NavigationList column>
        <Item>
          <Navigate to="/dashboard/songs">My Songs</Navigate>
        </Item>
        <Item>
          <Navigate to="/dashboard/mm">All Songs</Navigate>
        </Item>
        <Item>
          <Navigate to="/dashboard/statistics">Statistics</Navigate>
        </Item>
      </NavigationList>
      <UserSection>
        <p>Profile</p>
        <p>LogOut</p>
      </UserSection>
    </SidebarContainer>
  );
};

export default SidebarComponent;

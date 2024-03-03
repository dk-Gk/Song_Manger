// StyledComponents.tsx
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { space, color, layout } from 'styled-system';
import { boxShadow } from './commonStyle';


export const Load = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #413e3b;
  font-weight: bold;
`

export const NavigationList = styled.ul<{ column?: boolean }>`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  align-items: center;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  color: #c5bcbc;
  flex: 2;
`;

export const NavigationItem = styled.li`
  margin: 0 1rem;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const StyledBox = styled.div<any>`
  ${space}
  ${color}
  ${layout}
`;


export const StyledInput = styled.input`
margin-bottom: 10px;
padding: 8px;
border: 1px solid #ccc;
border-radius: 4px;
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    /* background: #ebe6e6; */
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 430px;
  width: 100%;
  background: #fff;
  padding: 20px 44px;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  & > h2 {
    position: relative;
    font-size: 22px;
    font-weight: 600;
    color: #333;
  }

  h2::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 28px;
    border-radius: 12px;
    background: #4070f4;
  }

`;

export const InputBox = styled.div`
    height: 52px;
    margin: 40px 0 20px 0;
`;


export const Input = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  padding: 0 15px;
  font-size: 17px;
  font-weight: 400;
  border: 1.5px solid #c7bebe;
  border-bottom-width: 2.5px;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #8f8f8f;
  }
`;

export const ErrorDisplay = styled.span`
  padding-top: 0;
  color:  #f52828;
`

export const Button = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  padding: 0 15px;
  font-size: 17px;
  font-weight: 400;
  color: #333;
  border: 1.5px solid #C7BEBE;
  border-bottom-width: 2.5px;
  border-radius: 6px;
  transition: all 0.3s ease;
  color: #fff;
  letter-spacing: 1px;
  border: none;
  background: #4070f4;
  cursor: pointer;

  &:hover {
    background: #0e4bf1;
  }
`;

export const Text = styled.div`
  color: #333;
  width: 100%;
  text-align: center;

  Navlink {
    color: #4070f4;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const H1 = styled.h1`
  text-align: center;
  color: #333;
`
export const H2 = styled.h2`
  color: #555;
  margin-bottom: 15px;
`
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  color: #1b1919;
  font-size: 15pt;
  font-weight: 500;
  transition: all 100ms ease-in-out;

  &:hover {
    color: #857c7c;
  }
  &.active {
    color: #000000;
    /* font-size: 20pt; Change font size when active */
    font-weight: bolder;
  }
`;

export const Form = styled.form`
    margin-top: 40px;
`
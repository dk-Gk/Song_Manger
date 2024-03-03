// components/HomePage.tsx
import React, { useEffect } from 'react';
import styled from '@emotion/styled'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import Header from '../components/Header';


const HomeContainer = styled.div`
     font-family: 'Roboto', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`
const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
  h1 {
  font-size: 36px;
  color: #333;
}

p {
  font-size: 18px;
  color: #666;
}
`
const Features = styled.div`
  margin-bottom: 40px;
  h2 {
  font-size: 24px;
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}
`
const Cta = styled.div`
  text-align: center;

  p {
    font-size: 18px;
  color: #333;
  margin-bottom: 20px;
  }
  button {
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #0056b3;
}
`


const HomePage: React.FC = () => {
  const user = useAppSelector(state => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("user", user);
    if (user) {
      navigate('/dashboard');
    }
  })
  const getStartHandler = () => {
    if (user) {
      navigate('/dashboard');
    }
    navigate('/login')
  }
    return (
        <>
        <Header />
        <HomeContainer>
            <HeaderContainer>
                <h1>Welcome to the Our Site!</h1>
                <p>Discover, listen, and enjoy your favorite songs.</p>
            </HeaderContainer>
            <Features>
                <h2>Key Features:</h2>
                <ul>
                    <li>Explore a vast collection of songs, artists, albums, and genres.</li>
                    <li>Create playlists and save your favorite songs.</li>
                    <li>Get different Statistics Information.</li>
                    <li>Customize your user profile and settings.</li>
                </ul>
            </Features>
            <Cta>
                <p>Ready to dive in?</p>
                    <button onClick={getStartHandler}>Get Started</button>
            </Cta>
        </HomeContainer>
        </>
    );
};

export default HomePage;

/**
 * The Home component represents the homepage of the application.
 *
 * It renders a stylish "Home" message with a background image and a call-to-action button.
 *
 * @example
 * ```jsx
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import Home from './Home';
 *
 * ReactDOM.render(<Home />, document.getElementById('root'));
 * ```
 *
 * @returns {React.ReactElement} A React element representing the homepage.
 */
import React from "react";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

const BackgroundImage = styled.div`
  background-image: url("https://picsum.photos/1080/1920");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: grey;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Home() {
  const { logout } = useAuth();
  return (
    <BackgroundImage>
      <HomeContainer>
        <Title>Welcome to our App!</Title>
        <p>This is a sample home screen.</p>
        <Button onClick={logout}>Logout</Button>
      </HomeContainer>
    </BackgroundImage>
  );
}

export default Home;

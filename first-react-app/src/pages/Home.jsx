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
import Card from "../components/Card";
import { Products } from "../utils/fakeProducts";

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
  max-width: 1400px;
  min-width: 90dvw;
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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;
`;
const ProductsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 16px;
  max-height: 60vh;
  overflow-y: auto;
`;
function Home() {
  const { logout } = useAuth();
  return (
    <BackgroundImage>
      <HomeContainer>
        <Header>
          <Title>Welcome to our App!</Title>
          <Button onClick={logout}>Logout</Button>
        </Header>
        <p>Products</p>
        {/* key props with listing of products and use of map function */}
        <ProductsBox>
          {Products.map((product) => {
            return <Card key={product.id} product={product} showDetails />;
          })}
        </ProductsBox>
      </HomeContainer>
    </BackgroundImage>
  );
}

export default Home;

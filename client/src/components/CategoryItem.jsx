import { Link } from 'react-router-dom'
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const aa = {
    borderRadius:"5px",
    textDecoration:"none",
    border:"none",
    padding: "10px",
    backgroundColor: "white",
    color:"gray",
    cursor: "pointer",
    fontWeight: 600,
  }

const CategoryItem = ({ item }) => {
  return (
    <Container>
      
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={`/products/${item.cat}`}>
        <a style={aa} href= {`/products/${item.cat}`}>SHOP NOW</a></Link>
      </Info>
      
    </Container>
  );
};

export default CategoryItem;
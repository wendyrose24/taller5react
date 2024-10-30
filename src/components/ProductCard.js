import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductName = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

const BuyButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

function ProductCard() {
  return (
    <Card>
      <ProductName>Producto X</ProductName>
      <BuyButton>Comprar</BuyButton>
    </Card>
  );
}

export default ProductCard;

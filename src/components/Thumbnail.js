import React from "react";
import styled from "styled-components";

const ThumbnailStyle = styled.div`
  height: 40px;
  width: 280px;
  background: #030403f0;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
  font-family: cursive;
`;

const Title = styled.h4`
  color: #ddd;
  text-decoration: none;
`;

const Thumbnail = ({ title }) => {
  return (
    <ThumbnailStyle>
      <Title>{title}</Title>
    </ThumbnailStyle>
  );
};

export default Thumbnail;

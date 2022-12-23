import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.5;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #393e46;

  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #fafafa;
  }

  p {
    font-size: 1rem;
    color: #fafafa60;
    margin-top: 0.75rem;
  }

  a {
    font-size: 1rem;
    margin-top: 0.45rem;
    color: #fafafa;
    font-weight: bold;
    text-decoration: none;
  }

  a.remove {
    color: #ff0000;
    font-size: 1rem;
    font-weight: bold;
  }
`;

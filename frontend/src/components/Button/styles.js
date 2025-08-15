import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 20px;
  border: ${(props) =>
    props.theme === "primary" ? "none" : "1px solid white"};

  color: ${(props) => (props.theme === "primary" ? "#000" : "#ffff")};
  border-radius: 25px;
  width: 100%;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(90deg, #00c9ff, #92fe9d)"
      : "transparent"};
  color: ${(props) => (props.theme === "primary" ? "#000" : "white")};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: ${(props) => (props.theme === "primary" ? "" : "white")};
    color: ${(props) => (props.theme === "primary" ? "" : "#000")};
  }
`;

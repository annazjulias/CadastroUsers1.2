import styled, { keyframes } from 'styled-components';

// Animação de entrada suave para o título e o formulário
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Título de boas-vindas à esquerda
export const Titulo = styled.div`
  width: 50%;
  max-width: 37%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: white;
  animation: ${fadeInUp} 1.5s ease forwards;

  h1 {
    font-size: 5rem;
    font-weight: bold;
  }

  p {
    font-weight: 300;
    color: #ccc;
    line-height: 1.6;
  }

  button {
    background: transparent;
    border: 1px solid white;
    padding: 10px 20px;
    border-radius: 25px;
    transition: 0.3s ease;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: white;
    color: black;
    transform: scale(1.05);
  }

  /* Responsividade para celulares */
  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
    padding: 20px;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      padding: 8px 16px;
      font-size: 0.9rem;
    }
  }
`;

// Formulário com visual moderno
export const Cadasto = styled.div`
  background: rgba(0, 0, 0, 0.35);
  border-radius: 20px;
  padding: 35px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.57);
  max-width: 500px;
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${fadeInUp} 1.5s ease forwards;

  h1 {
    color: white;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }

  /* Responsividade para celulares */
  @media (max-width: 600px) {
    width: 90%;
    padding: 25px;

    h1 {
      font-size: 1.5rem;
    }
  }
`;

// Input com borda neon e foco destacado
export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 0 14px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  margin-bottom: 10px;
  font-size: 1rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.75);
  }

  &:focus {
    border: 1px solid #00ffff;
    outline: none;
  }

  @media (max-width: 600px) {
    height: 40px;
    font-size: 0.9rem;
  }
`;

// Container geral com espaçamento e centralização
export const Tela = styled.div`
  margin-top: -10px;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;

  /* Responsividade para celulares */
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px 10px;
    height: auto;
    margin-top: 0;
  }
`;

// Div que agrupa os inputs
export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 auto;
  width: 100%;
`;

// Container das imagens com responsividade
export const Img = styled.div`
  p {
    color: white;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 200;
    font-size: 19px;

    @media (max-width: 600px) {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }

  .imgs-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (max-width: 600px) {
      gap: 6px;
      flex-wrap: wrap;
    }
  }

  img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.2s ease, border 0.3s ease;
    border: 2px solid transparent;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 600px) {
      width: 60px;
      height: 60px;
    }
  }

  img.selected {
    width: 80px; /* aumenta o tamanho */
    height: 80px;
    border: 3px solid #00ffff; /* borda azul, pode trocar a cor */
    transform: scale(1.1);

    @media (max-width: 600px) {
      width: 70px;
      height: 70px;
    }
  }
`;

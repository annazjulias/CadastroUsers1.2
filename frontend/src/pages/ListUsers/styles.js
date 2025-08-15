import styled from 'styled-components';

export const Tela = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  padding: 20px;

  @media (max-width: 600px) {
    margin-top: 50px;
    padding: 10px;
  }
`;

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.35);
  border-radius: 20px;
  padding: 30px;
  width: 100%;
  max-width: 1000px;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (max-width: 600px) {
    padding: 20px;
    gap: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 900;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const UsersCadastros = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;

  /* Responsividade: 2 colunas no celular */
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  div {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease, background 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.25);
    }

    img {
      border-radius: 50%;
      width: 60px;
      height: 60px;
      object-fit: cover;
      cursor: pointer;
      border: 2px solid transparent;
      transition: transform 0.2s ease, border 0.3s ease;

      &:hover {
        transform: scale(1.08);
        border: 2px solid rgb(97, 255, 189);
      }
    }

    p {
      color: #fff;
      font-size: 0.9rem;
      text-align: center;
      word-break: break-word;
    }
  }
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  color: #ff4d4d;
  transition: transform 0.2s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.3);
    color: #ff1a1a;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

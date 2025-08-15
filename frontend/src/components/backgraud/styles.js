import styled from 'styled-components';

export const Video = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
  object-position: center center; /* centraliza o foco do vídeo */

  /* Responsividade para celulares */
  @media (max-width: 600px) {
    width: auto; /* largura automática para preservar proporção */
    height: 100vh; /* altura fixa para cobrir a tela */
    max-width: 100vw; /* largura máxima igual à tela */
    object-position: center center; /* garante foco central */
  }
`;

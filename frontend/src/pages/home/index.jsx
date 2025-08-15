import React from "react";
import api from "../../services/api";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cadasto, Input, Titulo, Tela, DivInput, Img } from "./styles";
import { GlobalStyled } from "../../styles/GlobalStyle";
import Button from "../../components/Button";

export default function Home() {
  const nomeRef = useRef(null);
  const inputeAge = useRef();
  const inputEmail = useRef();
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();
  const images = [
    "/img/avatar1.jpeg",
    "/img/avatar2.jpeg",
    "/img/avatar3.jpeg",
    "/img/avatar4.jpeg",
    "/img/avatar5.jpeg",
  ];

  const focarNoInput = () => {
    nomeRef.current?.focus();
  };
  async function registerNewUser() {
    try {
      await api.post("/usuarios", {
        name: nomeRef.current.value,
        email: inputEmail.current.value,
        age: Number(inputeAge.current.value),
        avatar: selectedImage,
      });

      navigate("/lista-de-usuarios");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário");
    }
  }

  return (
    <>
      <GlobalStyled />

      <Tela>
        <Titulo>
          <h1>Bem-vindo à TechNova!</h1>
          <p>
            É um prazer ter você aqui. Por favor, faça seu cadastro para acessar
            nossas soluções inovadoras e transformar sua experiência digital.
            Estamos prontos para impulsionar o seu sucesso com tecnologia de
            ponta!
          </p>
          <button onClick={focarNoInput}>Crie sua conta na TechNova</button>
        </Titulo>

        <Cadasto>
          <h1>Cadastro do Usuário</h1>
          <Img>
            <p>Escolha sua foto de perfil:</p>
            <div className="imgs-container">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Avatar ${index + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className={selectedImage === img ? "selected" : ""}
                />
              ))}
            </div>
          </Img>

          <DivInput>
            <Input ref={nomeRef} type="text" placeholder="Nome do Usuário" />
            <Input
              ref={inputeAge}
              type="number"
              placeholder="Idade do Usuário"
            />
            <Input
              ref={inputEmail}
              type="email"
              placeholder="E-mail do Usuário"
            />
          </DivInput>
          <Button type="button" onClick={registerNewUser} theme="primary">
            Criar Conta
          </Button>
          <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
            Veja nossos Usuários
          </Button>
        </Cadasto>
      </Tela>
    </>
  );
}

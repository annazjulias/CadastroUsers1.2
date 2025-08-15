import { useEffect, useState } from "react";
import { Button } from "../../components/Button/styles";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Container, Title, UsersCadastros, DeleteButton, Tela } from "./styles";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  function handleVoltar() {
    navigate("/");
  }
  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");

      setUsers(data);
    }

    getUsers();
  }, []);

  async function handleDeleteUser(id) {
    try {
      await api.delete(`/usuarios/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
      alert("Não foi possível excluir o usuário");
    }
  }

  return (
    <Tela>
      <Container>
        <Title>lista de usuarios</Title>
        <UsersCadastros>
          {users.map((user) => (
            <div key={user.id}>
              <img src={user.avatar} alt={`Avatar de ${user.name}`} />
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.age}</p>

              <DeleteButton
                onClick={() => handleDeleteUser(user.id)}
                title="Excluir usuário"
              >
                🗑️
              </DeleteButton>
            </div>
          ))}
        </UsersCadastros>
        <Button onClick={handleVoltar} theme="primary">
          Voltar
        </Button>
      </Container>
    </Tela>
  );
}

export default ListUsers;

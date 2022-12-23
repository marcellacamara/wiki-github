import { Container } from "./styles";
import { IconContext } from "react-icons";
import { DiGithubBadge } from "react-icons/di";

import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import { api } from "../services/api";

import { useState } from "react";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);
    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositório já encontrado");
  };

  const handleRemoveRepo = (reposId, id) => {
    if (reposId === id) {
      document.getElementById(`${id}`).innerHTML = "";
    }
  };

  return (
    <Container>
      <IconContext.Provider value={{ color: "#EEEEEE", size: "8rem" }}>
        <DiGithubBadge />
        (nomeDoUsuário/nomeDoRepositório)
        <Input
          value={currentRepo}
          onChange={(e) => setCurrentRepo(e.target.value)}
        />
        <Button onClick={handleSearchRepo} />
        {repos.map((repo) => (
          <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />
        ))}
      </IconContext.Provider>
    </Container>
  );
}

export default App;

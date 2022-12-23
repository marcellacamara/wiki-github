import { Container } from "./styles";
import { IconContext } from "react-icons";
import { DiGithubBadge } from "react-icons/di";

import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";

function App() {
  const [repos, setRepos] = useState([]);
  return (
    <Container>
      <IconContext.Provider value={{ color: "#EEEEEE", size: "8rem" }}>
        <DiGithubBadge />
      </IconContext.Provider>
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;

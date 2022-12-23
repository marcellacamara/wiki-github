import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo({ repo, handleRemoveRepos }) {
  const handleRemove = () => {
    handleRemoveRepos(repo.id);
  };

  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <p>{repo.description}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        Ver repositório
      </a>
      <a href="*" className="remove">
        Remover
      </a>
    </ItemContainer>
  );
}

export default ItemRepo;

import React from 'react';

export default function CharacterList({ characters }) {
  const characterTable = characters.map((item) => {
    return (
      <li key={item.id}>
        <a href={`/api/characters/${item.id}`} key={item.id}>
          {item.name}
        </a>
      </li>
    );
  });
  return (
    <div>
      <ul>{characterTable}</ul>
    </div>
  );
}

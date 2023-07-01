import React from "react";

export default function ConceptItem({ item }) {
  return (
    <li className="concept">
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </li>
  );
}

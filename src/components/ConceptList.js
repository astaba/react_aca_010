import React from "react";
import ConceptItem from "./ConceptItem";

export default function ConceptList({ list }) {
  return (
    <ul id="concepts">
      {list.map((item, index) => (
        <ConceptItem key={index} item={item} />
      ))}
    </ul>
  );
}

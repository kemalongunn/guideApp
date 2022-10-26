import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <input
        placeholder="filter guide"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      ></input>
      <ul className="list">
        {filtered.map((contact, i) => (
          <li className="listGuide" key={i}>
            <span> {contact.fullname} </span>
            <span> {contact.phone_number} </span>
          </li>
        ))}
      </ul>
      <p>Total guide ({filtered.length})</p>
    </div>
  );
}

export default List;

import { useState } from "react";
import Search from "./Search";
import ResourceItem from "./ResourceItem";

function ResourceList({ resource, data }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (term) {
      const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredItems);
    } else {
      setSearchResults([]);
    }
  };


  return (
    <div>
        <Search  searchTerm={searchTerm} onSearch={handleSearch}/> 
        <ul>
        {searchTerm && searchResults.length > 0
          ? searchResults.map((item) => (
            <ResourceItem
              key={item.name || item.title}
              item={item}
              resource={resource}
            />
            ))
          : 
          data.map((item) => (
            <ResourceItem
              key={item.name || item.title}
              item={item}
              resource={resource}
            />
          ))}
        </ul>
      </div>
  );
}

export default ResourceList;

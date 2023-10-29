import React from "react";
import { Link } from "react-router-dom";
import { extractIdFromURL } from "../utils/apiUtils";


function incrementPopularity(item, resource) {
 
    const popularityData = JSON.parse(localStorage.getItem('popularity')) || [];
  

    const itemIndex = popularityData.findIndex((data) => data.url === item.url);
  
    if (itemIndex !== -1) {
      popularityData[itemIndex].value += 1;
    } else {
      popularityData.push({ url: item.url, value: 1, nameOrTitle: item.name || item.title, resource: resource });
    }
  
  
    localStorage.setItem('popularity', JSON.stringify(popularityData));
  }


// A reusable component to display a single resource item
function ResourceItem({ item, resource}) {

  return (
    <li key={item.name || item.title}>
      <Link to={`/${resource}/${extractIdFromURL(item.url)}`} onClick={() => incrementPopularity(item, resource)}>
        {item.name || item.title}
      </Link>
    </li>
  );
}

export default ResourceItem;

import React from 'react';
import { extractIdFromURL } from '../utils/apiUtils';

import { Link } from 'react-router-dom';

function getPopularItems() {
    const popularityData = JSON.parse(localStorage.getItem('popularity')) || [];
    return popularityData.sort((a, b) => b.value - a.value);
}

function PopularItems() {
  const popularItems = getPopularItems();
  return (
    <div className="container-resource">
      <h2>Popular Elements</h2>
      <ul>
        {popularItems.length === 0 ? 
        <p>No popular items</p> : 
        (popularItems.map((item, index) => (
          <Link to={`/${item.resource}/${extractIdFromURL(item.url)}`}>
            <li key={`${index}_${item.nameOrTitle}`}>
                {item.resource} <span>Title: {item.nameOrTitle}</span>
                <span>Popularidad: {item.value} views</span>
            </li>
          </Link>
        ))) }
      </ul>
    </div>
  );
}

export default PopularItems;

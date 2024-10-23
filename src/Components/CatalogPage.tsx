import React from 'react';
import { useParams } from 'react-router-dom';
import './Catalog.css';

const catalogs = {
  clothes: [
    { id: 1, name: 'T-Shirt', price: 20 },
    { id: 2, name: 'Jeans', price: 50 },
  ],
  food: [
    { id: 1, name: 'Apple', price: 1 },
    { id: 2, name: 'Pizza', price: 10 },
  ],
  electronics: [
    { id: 1, name: 'Smartphone', price: 500 },
    { id: 2, name: 'Laptop', price: 1000 },
  ],
};

const CatalogPage = () => {
  const { category } = useParams<{ category?: string }>();
  if (!category || !(category in catalogs)) {
    return <h2>Category not found</h2>;
  }

  const items = catalogs[category as keyof typeof catalogs];

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Catalog</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        {items.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;

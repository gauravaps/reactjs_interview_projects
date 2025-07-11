import React from 'react';
import './drinks.css';
import ProductCard from '../../products/ProductCard';

const Drinks = () => {
  const products = [
    {id:9,
      name: 'Mongo Juice',
      price: 45,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg/800px-Coca_Cola_Flasche_-_Original_Taste.jpg'
    },
    {id:10,
      name: 'Orange Juice',
      price: 50,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg/800px-Coca_Cola_Flasche_-_Original_Taste.jpg'
    },
    {id:11,
      name: 'CocaCola',
      price: 35,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg/800px-Coca_Cola_Flasche_-_Original_Taste.jpg'
    },
    {id:12,
      name: 'Butter Milk',
      price: 25,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg/800px-Coca_Cola_Flasche_-_Original_Taste.jpg'
    }
  ];

  return (
    <div className="drinks-container">
      <h2 className="drinks-title">Drinks</h2>
      <div className="drinks-grid">
        {products.map((product, id) => (
          <ProductCard
            key={id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
          
        ))}
      </div>
    </div>
  );
};

export default Drinks;

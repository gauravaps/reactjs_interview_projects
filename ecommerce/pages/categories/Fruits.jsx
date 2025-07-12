import React from 'react';
import './fruits.css';
import ProductCard from '../../products/ProductCard';
import products from '../../products/productsData';

const Fruits = () => {

  // const products = [
  //   {id:5,
  //     name: 'Apple',
  //     price: 120,
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ApelBaru.png/1024px-ApelBaru.png'
  //   },
  //   {id:6,
  //     name: 'Banana',
  //     price: 40,
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ApelBaru.png/1024px-ApelBaru.png'
  //   },
  //   {id:7,
  //     name: 'Orange',
  //     price: 60,
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ApelBaru.png/1024px-ApelBaru.png'
  //   },
  //   {id:8,
  //     name: 'Mango',
  //     price: 100,
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ApelBaru.png/1024px-ApelBaru.png'
  //   }
  // ];

    const fruitsProducts = products.filter(item => item.category === 'fruits');
  
  return (
    <div className="fruit-container">
      <h2 className="fruit-title">Fruits</h2>
      <div className="fruit-grid">
        {fruitsProducts.map((product, id) => (
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

export default Fruits;

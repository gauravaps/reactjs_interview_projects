// ✅ Step 5: Sweets.jsx
import React from 'react';
import './sweets.css';
import ProductCard from '../../products/ProductCard';

const Sweets = () => {
  const products = [
    {id:13,
      name: 'Kaju Katli',
      price: 800,
      image: 'https://images.pexels.com/photos/32707858/pexels-photo-32707858.jpeg?_gl=1*nqvqul*_ga*MTg5MzI1NjkxMy4xNzQyODkyNzkz*_ga_8JE65Q40S6*czE3NTIyNDg5NzQkbzkkZzEkdDE3NTIyNDk4MzQkajU0JGwwJGgw'
    },
    {id:14,
      name: 'Gulab Jamun',
      price: 470,
      image: 'https://images.pexels.com/photos/32707858/pexels-photo-32707858.jpeg?_gl=1*nqvqul*_ga*MTg5MzI1NjkxMy4xNzQyODkyNzkz*_ga_8JE65Q40S6*czE3NTIyNDg5NzQkbzkkZzEkdDE3NTIyNDk4MzQkajU0JGwwJGgw'
    },
    {id:15,
      name: 'Khee',
      price: 700,
      image: 'https://images.pexels.com/photos/32707858/pexels-photo-32707858.jpeg?_gl=1*nqvqul*_ga*MTg5MzI1NjkxMy4xNzQyODkyNzkz*_ga_8JE65Q40S6*czE3NTIyNDg5NzQkbzkkZzEkdDE3NTIyNDk4MzQkajU0JGwwJGgw'
    },
    {id:16,
      name: 'Ice-cream',
      price: 350,
      image: 'https://images.pexels.com/photos/32707858/pexels-photo-32707858.jpeg?_gl=1*nqvqul*_ga*MTg5MzI1NjkxMy4xNzQyODkyNzkz*_ga_8JE65Q40S6*czE3NTIyNDg5NzQkbzkkZzEkdDE3NTIyNDk4MzQkajU0JGwwJGgw'
    }
  ];

  return (
    <div className="sweets-container">
      <h2 className="sweets-title">Sweets</h2>
      <div className="sweets-grid">
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

export default Sweets;

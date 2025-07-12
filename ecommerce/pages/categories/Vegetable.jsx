import React from 'react';
import ProductCard from '../../products/ProductCard';
import products from '../../products/productsData';
import './vegetables.css';


const Vegetables = () => {


  // const productss = [
  //   {id:1,
  //     name: 'Tomato',
  //     price: 30,
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/960px-Tomato_je.jpg?20050516221203'
  //   },
  //   {id:2,
  //     name: 'Potato',
  //     price: 25,
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/960px-Tomato_je.jpg?20050516221203'
  //   },
  //   {id:3,
  //     name: 'Carrot',
  //     price: 40,
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/960px-Tomato_je.jpg?20050516221203'
  //   },
  //   {id:4,
  //     name: 'Onion',
  //     price: 35,
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/960px-Tomato_je.jpg?20050516221203'
  //   }
  // ];

  const vegetableProducts = products.filter(item => item.category === 'vegetables');


  return (
    <div className="vegetable-container">
      <h2 className="veg-title">Vegetables</h2>
      <div className="veg-grid">
        {vegetableProducts.map((product, id) => (
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

export default Vegetables;

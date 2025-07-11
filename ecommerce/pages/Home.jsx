import React from 'react';
import './home.css';
import ProductCard from '../products/ProductCard';
const Home = () => {
  const allProducts = [
    // Vegetables
    { id:1 ,name: 'Tomato', price: 20, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/960px-Tomato_je.jpg?20050516221203' },
    { id:2,name: 'Potato', price: 15, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/960px-Tomato_je.jpg?20050516221203' },
    { id:3,name: 'Carrot', price: 25, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/960px-Tomato_je.jpg?20050516221203' },
    {id:4, name: 'Onion', price: 18, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/960px-Tomato_je.jpg?20050516221203' },

    // Fruits
    {id:5, name: 'Apple', price: 40, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ApelBaru.png/1024px-ApelBaru.png' },
    {id:6, name: 'Banana', price: 20, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ApelBaru.png/1024px-ApelBaru.png' },
    {id:7, name: 'Orange', price: 25, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ApelBaru.png/1024px-ApelBaru.png' },
    {id:8, name: 'Mango', price: 60, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ApelBaru.png/1024px-ApelBaru.png' },

    // Drinks
    {id:9, name: 'Mango Juice', price: 30, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg/800px-Coca_Cola_Flasche_-_Original_Taste.jpg' },
    {id:10, name: 'Orange Juice', price: 28, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg/800px-Coca_Cola_Flasche_-_Original_Taste.jpg' },
    {id:11, name: 'CocaCola', price: 35, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg/800px-Coca_Cola_Flasche_-_Original_Taste.jpg' },
    {id:12, name: 'Butter Milk', price: 18, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg/800px-Coca_Cola_Flasche_-_Original_Taste.jpg' },

    // Sweets
    { id:13,name: 'Kaju Katli', price: 250,       image: 'https://images.pexels.com/photos/32707858/pexels-photo-32707858.jpeg?_gl=1*nqvqul*_ga*MTg5MzI1NjkxMy4xNzQyODkyNzkz*_ga_8JE65Q40S6*czE3NTIyNDg5NzQkbzkkZzEkdDE3NTIyNDk4MzQkajU0JGwwJGgw' },
    {id:14, name: 'Gulab Jamun', price: 150,       image: 'https://images.pexels.com/photos/32707858/pexels-photo-32707858.jpeg?_gl=1*nqvqul*_ga*MTg5MzI1NjkxMy4xNzQyODkyNzkz*_ga_8JE65Q40S6*czE3NTIyNDg5NzQkbzkkZzEkdDE3NTIyNDk4MzQkajU0JGwwJGgw' },
    { id:15, name: 'Kheer', price: 180,       image: 'https://images.pexels.com/photos/32707858/pexels-photo-32707858.jpeg?_gl=1*nqvqul*_ga*MTg5MzI1NjkxMy4xNzQyODkyNzkz*_ga_8JE65Q40S6*czE3NTIyNDg5NzQkbzkkZzEkdDE3NTIyNDk4MzQkajU0JGwwJGgw' },
    {id:16, name: 'Ice-cream', price: 200,       image: 'https://images.pexels.com/photos/32707858/pexels-photo-32707858.jpeg?_gl=1*nqvqul*_ga*MTg5MzI1NjkxMy4xNzQyODkyNzkz*_ga_8JE65Q40S6*czE3NTIyNDg5NzQkbzkkZzEkdDE3NTIyNDk4MzQkajU0JGwwJGgw'
 },
  ];

  return (
    <div className="home-container">
      <h2 className="home-title">All Products</h2>
      <div className="home-grid">
        {allProducts.map((product, index) => (
          <ProductCard
            key={index}
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

export default Home;

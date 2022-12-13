import bcrypt from 'bcryptjs';

const data = {
users: [
  {
    name: 'daksha',
    email: 'admin@example.com',
    password: '123456',
    isAdmin: true,
  },
  {
    name: 'kushal',
    email: 'user@example.com',
    // password: bcrypt.hashSync('123456'),
    password: '123456',
    isAdmin: false,
  },
],

    products: [
      {
        //_id: '1',
        name: 'Sling Bag',
        slug: 'sling-bag',
        category: 'Bags',
        image: '/images/p1.jfif', // 679px × 829px
        price: 120,
        countInStock: 0,
        brand: 'Rains',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality bag',
      },
      {
        //_id: '2',
        name: 'Hand Bag',
        slug: 'hand-bag',
        category: 'Bags',
        image: '/images/p2.jfif',
        price: 250,
        countInStock: 20,
        brand: 'Dior',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        //_id: '3',
        name: 'Backpack',
        slug: 'backpack',
        category: 'Bags',
        image: '/images/p3.jfif',
        price: 25,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        //_id: '4',
        name: 'Red Backpack',
        slug: 'red-backpack',
        category: 'Bags',
        image: '/images/p3.jfif',
        price: 25,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
    ],
  };
  export default data;
const products = [
  {
    id: '3',
    name: 'Auriculares Sennheiser',
    price: 25000,
    category: 'auriculares',
    img: 'https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_960_720.jpg',
    stock: 15,
    descrip: 'Auriculares inalámbricos Sennheiser',
  },
  {
    id: '4',
    name: 'Auriculares Beats',
    price: 20000,
    category: 'auriculares',
    img: 'https://cdn.pixabay.com/photo/2018/03/08/22/11/beats-solo-3-3210039_960_720.jpg',
    stock: 8,
    descrip: 'auris inalambricos Beats ',
  },
  {
    id: '5',
    name: 'Parlante Yamaha',
    price: 28000,
    category: 'parlantes',
    img: 'https://cdn.pixabay.com/photo/2021/03/02/15/27/yamaha-6062863_960_720.jpg',
    stock: 20,
    descrip: 'Parlante portátil Yamaha',
  },
  {
    id: '6',
    name: 'Parlante Harman Bell',
    price: 25000,
    category: 'parlantes',
    img: 'https://cdn.pixabay.com/photo/2018/10/14/22/07/speakers-3747617_960_720.jpg',
    stock: 12,
    descrip: 'Parlante de alta fidelidad Harman Bell',
  },
  {
    id: '7',
    name: 'Notebook Macbook Pro',
    price: 500000,
    category: 'notebooks',
    img: 'https://cdn.pixabay.com/photo/2015/05/15/02/07/computer-767781_960_720.jpg',
    stock: 18,
    descrip: 'Notebook Macbook Pro 13"',
  },
  
  {
    id: '8',
    name: 'Notebook Asus',
    price: 350000,
    category: 'notebooks',
    img: 'https://media.istockphoto.com/id/906347962/photo/gaming-laptop-with-connected-mouse-and-headphones.jpg?s=1024x1024&w=is&k=20&c=InUWs84lrV2w_ZUkXCf6Lf2kKOxPfXuBf7MAhqjvNu0=',
    stock: 15,
    descrip: 'Notebook Asus Gamer',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};

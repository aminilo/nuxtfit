/*export const useProducts = ()=> {
  return [
    {
      id: 1,
      name: 'Slim Fit Shirt',
      slug: 'slim-fit-shirt',
      price: 490000,
      image: '/images/shirt1.jpg',
      description: 'A modern slim-fit shirt for every occasion.'
    },
    {
      id: 2,
      name: 'Classic Jeans',
      slug: 'classic-jeans',
      price: 640000,
      image: '/images/jeans1.jpg',
      description: 'Durable and stylish jeans that go with everything.'
    },
    {
      id: 3,
      name: 'Casual Jacket',
      slug: 'casual-jacket',
      price: 850000,
      image: '/images/jacket1.jpg',
      description: 'Lightweight and comfortable jacket for chilly evenings.'
    }
  ]
}*/

export const useProducts = async () => {
  const { data, error, pending } = await useFetch('https://fakestoreapi.com/products')

  return {
    products: data,
    error,
    loading: pending
  }
}

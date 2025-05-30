export const useCart = ()=> {
  const cartItems = useState('cartItems', ()=> []);
  const { isLoggedIn } = useAuth();

  const saveCart = ()=> {
    localStorage.setItem('nuxtfit_cart', JSON.stringify(cartItems.value));
  };

  const loadCart = ()=> {
    const stored = localStorage.getItem('nuxtfit_cart');
    if(stored) cartItems.value = JSON.parse(stored);
  };

  const addToCart = (product)=> {
    if( !isLoggedIn.value ){
      alert('Please login to add items to your cart.');
      return false;
    }
    const existing = cartItems.value.find(p=> p.id === product.id);
    if(existing){
      existing.quantity += 1;
    }else{ cartItems.value.push({ ...product, quantity: 1 }); }
    saveCart(); return true;
  };

  const removeFromCart = (id)=> {
    cartItems.value = cartItems.value.filter(item=> item.id !== id);
    saveCart();
  };

  const cartTotal = computed(()=>
    cartItems.value.reduce((sum, item)=> sum + item.price * item.quantity, 0)
  );

  onMounted(()=> loadCart());

  return { cartItems, addToCart, removeFromCart, cartTotal };
};

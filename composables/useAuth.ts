export const useAuth = ()=> {
  const user = useState<string | null>('user', ()=> null);

  const login = (username = 'guest')=> {
    user.value = username;
    localStorage.setItem('nuxtfit_user', username);
  };

  const logout = ()=> {
    user.value = null;
    localStorage.removeItem('nuxtfit_user');
  };

  const isLoggedIn = computed(()=> !!user.value);

  onMounted(()=> {
    const storedUser = localStorage.getItem('nuxtfit_user');
    if (storedUser) user.value = storedUser;
  });

  return { user, login, logout, isLoggedIn };
};

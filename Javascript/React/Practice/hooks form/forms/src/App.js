
import UserForm from './components/User';
import { useState } from 'react';

const App =()=> {
  const [user , setUser]=useState(null)
  return (
      <UserForm user={user} setUser={setUser} />
  );
}

export default App;

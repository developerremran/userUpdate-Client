import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
     <div className='mt-10 mx-auto flex gap-5 justify-center'>
      <Link to='/addCoffee'><Button color="purple">
      Coffee Add
    </Button></Link><br />
      <Link to='/coffee-shop'><Button color="purple">
      Coffee Shop
    </Button></Link>
     </div>
  );
};

export default App;
import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard/CoffeeCard';

const CoffeeShop = () => {

  const coffeesLoader = useLoaderData()
  // console.log(coffees);
  const [coffees, setCoffees] = useState(coffeesLoader)
  return (
    <div>
      <p>Coffee Shop Page</p>

      <div className='grid grid-cols-3 gap-10 '>
        
      {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }

      </div>
 

      <div className='absolute bottom-0 mx-auto flex gap-5 justify-center'>
        <Link to='/'><Button color="purple">
          Back To Home
        </Button></Link><br />
      </div>
    </div>
  );
};

export default CoffeeShop;
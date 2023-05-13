/* eslint-disable react/prop-types */
import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
     

    const {name, details, price, photo,_id} = coffee;


    const removeItem =(_id)=>{
        console.log("here is id ",_id);
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
             if(data.deletedCount > 0){

                alert('Your Item has been delete')
                const newCard = coffees.filter(cof => cof._id !== _id)
                setCoffees(newCard)
             }
        })
        .catch(error => console.log(error))

    }
    return (
        <div className='container mx-auto '>
            <div className=' border-2 shadow-lg p-10 flex justify-between'>
                <img className='w-1/4' src={photo} alt="" />
                <div className='flex flex-col items-'>
                    <h2 className='text-2xl font-bold'>{name}</h2>
                    <p>{details}</p>
                    <p>{price}</p>

                    <div className='flex gap-5'>
                        <Button><Link to={`/coffee-update/${_id}`}> Edit</Link></Button>
                        <Button onClick={()=>removeItem(_id)}>Delete</Button>
                        <Button>View</Button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CoffeeCard;
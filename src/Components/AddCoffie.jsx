import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const AddCoffie = () => {
   
    const addCoffeeHandeler =event=>{
        event.preventDefault();
        const from = event.target;

        const name = from.name.value;
        const price = from.price.value;
        const details = from.details.value;
        const photo = from.photo.value;

        const fromResult = {name,price, details, photo}

        // console.log(fromResult);
        fetch('http://localhost:5000/coffee', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(fromResult)

        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
        })
        .catch(error => console.log(error))
        
    }

    return (
        <div>
            <p className='text-3xl text-center font-semibold mt-10 mb-10'>Please Add Your Product</p>


            <form onSubmit={addCoffeeHandeler} className='w-1/4 container mx-auto'>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Coffee Name"
                        />
                    </div>
                    <TextInput
                        id="text"
                        type="text"
                        name='name'
                        placeholder="Type Your Coffee Name "
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Coffee Price"
                        />
                    </div>
                    <TextInput
                        id="text"
                        type="text"
                        name='price'
                        placeholder="Type Your Coffee Pice "
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Coffee Details"
                        />
                    </div>
                    <TextInput
                        id="text"
                        type="text"
                        name='details'
                        placeholder="Type Your Coffee Details "
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Coffee Photo URL"
                        />
                    </div>
                    <TextInput
                        id="text"
                        type="text"
                        name='photo'
                        placeholder="Type Your Coffee Photo URL "
                        required={true}
                    />
                </div>

               <div className='items-center justify-center flex'>
               <Button  className='mt-5' type="submit">
                   Add Coffee
                </Button>
               </div>
            </form>








            <div className='bottom-0 absolute mx-auto flex gap-5 justify-center'>
                <Link to='/'><Button color="purple">
                    Back To Home
                </Button></Link><br />
            </div>
        </div>
    );
};

export default AddCoffie;
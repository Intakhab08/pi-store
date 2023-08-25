import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
    return (
        <div className="p-5 shadow-lg rounded-md">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem]lg:w-[9rem] lg:h-[9rem]">
                    <img className="w-full h-full object-cover object-top" src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/o/d/v/l-hm-shirt26-hanumntra-original-imafuqy3q4rzffx7-bb.jpeg?q=70"
                    alt=""/>
                </div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold">Men Printed Party White Shirt</p>
                    <p className="opacity-70">Size: M, White</p>
                    <p className="opacity-70 mt-2">Seller: Levi's</p>
                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                <p className='font-semibold'>
                ₹419
                </p>
                <p className='opacity-50 line-through'>₹1,899</p>
                <p className='text-green-600 font-semibold'>70% off</p>
            </div>
                </div>
                

            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                    <div className="flex items-center space-x-2">
                        <IconButton >
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <span className="py-1 px-7 border rounded-sm">4</span>
                        <IconButton sx={{color:"purple"}}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                        
                    </div>

                    <div>
                        <Button sx={{color:"purple"}}>remove</Button>
                    </div>

                </div>
            
        </div>
    )
}

export default CartItem
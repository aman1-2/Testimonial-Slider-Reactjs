import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
    /*Inside the Card Component we will recive the data of a single person according to the
    index value.Here we will show:-
    
    (i)Div-> (A) which holds person image (B) a div to make a circle.
    
    (ii)Div-> to have person's name.
    
    (iii)Div-> to have person'sjob title.
    
    (iv)Div-> to have a left quote icon.
    
    (v)Div-> to have a description.
    
    (vi)Div-> to have a right quote icon.
    */
    let reviews=props.reviews;
 
    return(
        <div className="flex flex-col md:relative">

            <div className="absolute top-[-7rem] z-10 mx-auto ">

                <img src={reviews.image} alt="Person's DP" className="aspect-square rounded-full w-[140px] h-[140px] z-25"></img>
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>

            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize leading-3">{reviews.name}</p>
            </div>

            <div className="text-center mt-4">
                <p className="text-violet-300 text-sm uppercase">{reviews.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft></FaQuoteLeft>
            </div>

            <div className="text-center mt-4 text-slate-500 ">
                {reviews.text}
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight></FaQuoteRight>
            </div>

        </div>
    );
}

export default Card;
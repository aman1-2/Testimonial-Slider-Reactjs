import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Testimonial =(props) => {
    /*Inside the Testinomial Component we have tried to place three things these are:-
    (i)The Card at starting which is holdind a single person detail at a time.
    Card in itself is a Component.
    
    (ii)Two buttons to move left and right.
    
    (iii)At the end we have surprise me button which gives a person detail randomly to us.
    
    
    You would be wondering that why we haven't placed the moving buttons (left and right) as
    well as the Surprise me Button in the card section this is because our card will be holding
    a single person's detail only therefor making it their won't be profitable.
    
    Now the other question would be how we will be chossing that which data we have to display
    in the card this is will be done with the help of index.
    
    Our data stored in an array.
    
    In this we have to used some new features like react-icon to showcase few icons*/

    let reviews=props.reviews;
    const [index,setIndex] = useState(0); //Declared an index variable

    /*This is function is to move the data in left side in a circular motion */
    function leftHandler(){
        if(index-1 < 0){//If our index is less than zero that is it has moved out of the
            /*array then doing one more time left shouid take it to the last data */
            setIndex(reviews.length-1);
        }
        else{//If we have data on the left side just keep on decreasing the index.
            setIndex(index-1);
        }
    }

    /*This is function is to move the data in right side in a circular motion */
    function rigthHandler(){
        if(index+1>=reviews.length){/*If our index has become more than the size/length
        of array and we still want to move right then start the array again from zero. */
            setIndex(0);
        }
        else{//If we have data on the rigth side just keep on increasing the index.
            setIndex(index+1);
        }
    }

    /*This function is to create a random number between the 0 and array's length.
    For calculating the random number we use math.random function */
    function supriseMe(){
        let random=Math.floor(Math.random()*reviews.length);/*Random function can give us decimal
        valuesto get an integer value we use math.floor function. */
        setIndex(random);
    }

    return(
        <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">

            <Card reviews={reviews[index]}></Card>

            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">

                <button className="cursor-pointer hover:text-violet-500" onClick={leftHandler}>
                    <FiChevronLeft></FiChevronLeft>
                </button>
                <button className="cursor-pointer hover:text-violet-500" onClick={rigthHandler}>
                    <FiChevronRight></FiChevronRight>
                </button>

            </div>

            <div className="mt-6">
                <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg" onClick={supriseMe}>Surprise Me</button>
            </div>


        </div>
    );
}

export default Testimonial;
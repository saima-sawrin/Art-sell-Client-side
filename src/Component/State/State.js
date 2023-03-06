import React from 'react';
import line from '../../Asset/title-line.png';
import './State.css';
const State = () => {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;
    
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
    return (
        <div className=' pt-5 font-sans'>
            <div className="max-w-xl mb-2 md:mx-auto sm:text-center lg:max-w-2xl md:mb-5  ">
       
       <h2 className="max-w-lg  font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto ">
      STATE
       </h2>
   
      <p className='text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, cum fuga. Molestias similique nulla odio quo vitae aliquid ea ad   </p>
      <img src={line} alt="" className='items-center mx-auto' />
     </div>
     
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-5">
		<div className="flex flex-col justify-start m-2 lg:m-3">
			<p  className="text-4xl font-bold leading-none lg:text-6xl text-primary num"data-val="100">1</p>
			<p className="text-sm sm:text-base">Clients</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-3">
			<p className="text-4xl font-bold leading-none lg:text-6xl text-primary num"data-val="980">989</p>
			<p className="text-sm sm:text-base">Followers on social media</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-3">
			<p className="text-4xl font-bold leading-none text-primary lg:text-6xl num"data-val="30"></p>
			<p className="text-sm sm:text-base">Published books</p>
		</div>
		
		<div className="flex flex-col justify-start m-2 lg:m-3">
			<p className="text-4xl font-bold leading-none text-primary lg:text-6xl  num"data-val="220"></p>
			<p className="text-sm sm:text-base">Years of experience</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-3">
			<p className="text-4xl font-bold leading-none text-primary lg:text-6xl num"data-val="10">11</p> 
			<p className="text-sm sm:text-base">Workshops</p>
		</div>
	</div>
</section>
        </div>
    );
};

export default State;
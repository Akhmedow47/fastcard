import React from 'react'
import girls from '@/pics/Side Image.svg'
import ser1 from '@/pics/Services.svg'
import ser2 from '@/pics/Services (1).svg'
import ser3 from '@/pics/Services (2).svg'
import ser4 from '@/pics/Services (3).svg'
import person1 from '@/pics/Frame 874.svg'
import person2 from '@/pics/Frame 875.svg'
import person3 from '@/pics/Frame 876.svg'
import car from '@/pics/car.svg'
import protect from '@/pics/protect.svg'
import ear from '@/pics/earrr.svg'
import dots from '@/pics/Frame d.svg'

import soc from '@/pics/socials.svg'
const About = () => {
  return (
	<>
	 <div className='flex flex-col lg:flex-row lg:gap-[140px] gap-5 lg:w-[90%] lg:m-auto lg:items-center'>
		<div className='flex flex-col gap-5'>
			<h1 className='font-bold text-[28px] lg:text-[54px]'>
				Our Story
			</h1>
			<p>
				Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
			</p>
			<p>
				Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
			</p>

		</div>
		<img src={girls} alt="" />
	 </div>
	<div className="flex flex-col lg:flex-row justify-between my-[100px] lg:w-[90%] m-auto gap-5 items-center">
  <article className="w-[240px] border rounded border-gray-500 gap-1 text-center flex flex-col items-center p-6 bg-none hover:bg-red-500 hover:text-white transition-colors">
    <img src={ser1} alt="" />
    <h1>10.5k</h1>
    <p>Sallers active our site</p>
  </article>

  <article className="w-[240px] border rounded border-gray-500 gap-1 text-center flex flex-col items-center p-7 bg-none hover:bg-red-500 hover:text-white transition-colors">
    <img src={ser2} alt="" />
    <h1>33k</h1>
    <p>Monthly Product Sale</p>
  </article>

  <article className="w-[240px] border rounded border-gray-500 gap-1 text-center flex flex-col items-center p-6 bg-none hover:bg-red-500 hover:text-white transition-colors">
    <img src={ser3} alt="" />
    <h1>45.5k</h1>
    <p>Customers active in our site</p>
  </article>

  <article className="w-[240px] border rounded border-gray-500 gap-1 text-center flex flex-col items-center p-6 bg-none hover:bg-red-500 hover:text-white transition-colors">
    <img src={ser4} alt="" />
    <h1>25k</h1>
    <p>Annual gross sale in our site</p>
  </article>
</div>



	 <div className='flex flex-col lg:flex-row items-center lg:justify-between lg:w-[90%] m-auto gap-7'>
		<article className='flex flex-col gap-1 items-start'>
<img src={person1} alt="" />
<h1 className='font-bold text-[32px]'>Tom Cruise</h1>
<p>Founder & Chairman</p>
<div>
<img src={soc} alt="" />

</div>
		</article>
		<article className='hidden lg:flex flex-col gap-1 items-start'>
<img src={person2} alt="" />
<h1 className='font-bold text-[32px]'>Will Smith</h1>
<p>Product Designer</p>
<div>
<img src={soc} alt="" />

</div>
		</article>
		<article className='hidden lg:flex flex-col gap-1 items-start'>
<img src={person3} alt="" />
<h1 className='font-bold text-[32px]'>Emma Watson</h1>
<p>Managing Director</p>
<div>
<img src={soc} alt="" />

</div>
		</article>
	 </div>



	 	 <div className='flex flex-col lg:flex-row justify-between my-[100px] lg:w-[80%] m-auto gap-5   items-center '>

			<article className='  border-gray-500 gap-1 text-center flex flex-col items-center p-6 '>
<img src={car} alt="" />
<h1>FREE AND FAST DELIVERY </h1>
<p>Free delivery for all orders over $140</p>
			</article>
			<article className='   gap-1 text-center flex flex-col items-center p-6  '>
<img src={ear} alt="" />
<h1>24/7 CUSTOMER SERVICE </h1>
<p>Friendly 24/7 customer support</p>
			</article>
			<article className='  rounded -gray-500 gap-1 text-center flex flex-col items-center p-6'>
<img src={protect} alt="" />
<h1>MONEY BACK GUARANTEE</h1>
<p>We reurn money within 30 days</p>
			</article>
			
	 </div>

	</>
  )
}

export default About

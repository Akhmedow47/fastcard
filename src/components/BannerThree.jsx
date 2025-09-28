import React from 'react'
import AmazonSpeaker from "@/pics/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.svg";
import PlayStation5 from "@/pics/ps-5.svg";
import Kholashka from "@/pics/kholawka.svg";
import GucciParfume from "@/pics/652e82cd70aa6522dd785109a455904c.svg";
import { Link } from 'react-router-dom';


const BannerThree = () => {
	 return (
		  <div>
				<div className='flex gap-[30px] max-lg:flex-col max-lg:items-center'>
					 <div className='w-[80%] h-[600px] bg-[black] border-[2px] border-[whitesmoke] rounded-[4px] relative max-md:w-[80vw] max-md:h-[500px]'>
						  <img src={PlayStation5} alt="" className='absolute w-[550px] h-[550px] top-[45px] z-10 max-md:w-[400px] max-md:h-[400px] max-md:top-[60px]' />
						  <div className=''>
								<div className='pt-[410px] p-[40px] flex flex-col gap-[15px] z-20 absolute max-md:pt-[300px] max-md:p-[20px]'>
									 <h3 className='text-[24px] text-[whitesmoke] font-[600] max-md:text-[20px]'>PlayStation 5</h3>
									 <p className='text-[16px] text-[whitesmoke] font-[400] max-md:text-[14px]'>Black and White version of the PS5 <br />
										  coming out on sale.
									 </p>
									 <Link to={"/"}>
										  <p className="text-[18px] text-[whitesmoke] underline hover:text-[#DB4444] transition-all duration-500 max-md:text-[16px]">Shop Now</p>
									 </Link>
								</div>
						  </div>
					 </div>
					 <div className='flex flex-col gap-[30px] max-lg:items-center'>
						  <div className='w-[670px] h-[284px] bg-[black] border-[2px] border-[whitesmoke] rounded-[4px] relative max-md:w-[90vw] max-md:h-[250px]'>
								<img src={Kholashka} alt="" className='absolute w-[550px] h-[250px] top-[30px] left-[115px] z-10 max-md:w-[400px] max-md:h-[180px] max-md:left-[50%] max-md:translate-x-[-50%]' />
								<div className=''>
									 <div className='pt-[100px] p-[40px] flex flex-col gap-[15px] z-20 absolute max-md:pt-[70px] max-md:p-[20px]'>
										  <h3 className='text-[24px] text-[whitesmoke] font-[600] max-md:text-[20px]'>Women's Collections</h3>
										  <p className='text-[16px] text-[whitesmoke] font-[400] max-md:text-[14px]'>Featured woman collections that<br />
												give you another vibe.
										  </p>
										  <Link to={"/"}>
												<p className="text-[18px] text-[whitesmoke] underline hover:text-[#DB4444] transition-all duration-500 max-md:text-[16px]">Shop Now</p>
										  </Link>
									 </div>
								</div>
						  </div>
						  <div className='flex gap-[30px] max-md:flex-col'>
								<div className='w-[320px] h-[284px] bg-[black] border-[2px] border-[whitesmoke] rounded-[4px] relative max-md:w-[90vw] max-md:h-[250px]'>
									 <img src={AmazonSpeaker} alt="" className='absolute w-[240px] h-[240px] top-[25px] left-[40px] z-10 max-md:left-[50%] max-md:translate-x-[-50%] max-md:w-[200px] max-md:h-[200px]' />
									 <div className=''>
										  <div className='pt-[130px] p-[40px] flex flex-col gap-[10px] z-20 absolute max-md:pt-[100px] max-md:p-[20px] max-md:items-center max-md:text-center'>
												<h3 className='text-[24px] text-[whitesmoke] font-[600] max-md:text-[20px]'>Speakers</h3>
												<p className='text-[16px] text-[whitesmoke] font-[400] max-md:text-[14px]'>Amazon wireless speakers</p>
												<Link to={"/"}>
													 <p className="text-[18px] text-[whitesmoke] underline hover:text-[#DB4444] transition-all duration-500 max-md:text-[16px]">Shop Now</p>
												</Link>
										  </div>
									 </div>
								</div>
								<div className='w-[320px] h-[284px] bg-[black] border-[2px] border-[whitesmoke] rounded-[4px] relative max-md:w-[90vw] max-md:h-[250px]'>
									 <img src={GucciParfume} alt="" className='absolute w-[240px] h-[240px] top-[25px] left-[40px] z-10 max-md:left-[50%] max-md:translate-x-[-50%] max-md:w-[200px] max-md:h-[200px]' />
									 <div className=''>
										  <div className='pt-[130px] p-[40px] flex flex-col gap-[10px] z-20 absolute max-md:pt-[100px] max-md:p-[20px] max-md:items-center max-md:text-center'>
												<h3 className='text-[24px] text-[whitesmoke] font-[600] max-md:text-[20px]'>Perfume</h3>
												<p className='text-[16px] text-[whitesmoke] font-[400] max-md:text-[14px]'>GUCCI INTENSE OUD EDP</p>
												<Link to={"/"}>
													 <p className="text-[18px] text-[whitesmoke] underline hover:text-[#DB4444] transition-all duration-500 max-md:text-[16px]">Shop Now</p>
												</Link>
										  </div>
									 </div>
								</div>
						  </div>
					 </div>
				</div>
		  </div>
	 )
}

export default BannerThree

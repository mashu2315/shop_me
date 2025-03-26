import React from 'react'
import Slider from "react-slick";

const TestimonialsData =[
    {
       id:1, 
       name:"victor",
       text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aut consequatur illum excepturi ea consectetur, at nesciunt non blanditiis quisquam ducimus voluptates. Molestias corporis error commodi, voluptatum natus.',
       img:"https://picsum.photos/205/307",
    },
    {
        id:2, 
        name:"Satya",
        text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aut consequatur illum excepturi ea consectetur, at nesciunt non blanditiis quisquam ducimus voluptates. Molestias corporis error commodi, voluptatum natus.',
        img:"https://picsum.photos/200/300",
     },
     {
        id:3, 
        name:"Virat",
        text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aut consequatur illum excepturi ea consectetur, at nesciunt non blanditiis quisquam ducimus voluptates. Molestias corporis error commodi, voluptatum natus.',
        img:"https://picsum.photos/201/301",
     },
     {
        id:4, 
        name:"Groot",
        text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aut consequatur illum excepturi ea consectetur, at nesciunt non blanditiis quisquam ducimus voluptates. Molestias corporis error commodi, voluptatum natus.',
        img:"https://picsum.photos/201/300",
     },
     {
        id:5, 
        name:"Tony",
        text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aut consequatur illum excepturi ea consectetur, at nesciunt non blanditiis quisquam ducimus voluptates. Molestias corporis error commodi, voluptatum natus.',
        img:"https://picsum.photos/200/301",
     }
]

const Testimonials = () => {
    var settings = {
        dots:true,
        arrows:false,
        Infinite:true,
        speed:500,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true, 
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    Infinite:true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlider:2,
                }
            },
            {
                breakpoint:640,
                setting:{
                    slideToShow:1,
                    slideToScroll:1,
                }
            }
        ]    }
  return (
    <div className='py-10 mb-10'>
        <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary '>What our cumstomers are saying</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold '>
                Testomonials
            </h1>
            <p data-aos="fade-up" className='texdt-xs text-gray-400 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, debitis voluptatum quia necessitatibus, incidunt earum architecto quam atque minima, aliquid optio!</p>
        </div>
        <div datad-aos="zoom-in">
            <Slider {...settings}> 
                {
                    TestimonialsData.map((data)=>{
                        return(
                            <div key={data.id} className='my-6'>
                                <div  className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative '> <div className='mb-4'>
                            <img src={data.img} alt="" className='rounded-full w-20 h-20 '/>
                                </div>
                                <div className="flex flex-col items-center gap-4"><div className="space-y-3"><p className='text-xs dark:text-slate-300 text-gray-500 '>{data.text}</p>
                                <h1 className='text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light'>{data.name}</h1>
                                </div></div>
                                <p className='text-black/20 text-9xl font-sarif absolute right-0 top-0'></p>
                                </div>
                            </div>
                        )
                    })
                }

            </Slider>

        </div>
        </div>
    </div>
  )
}

export default Testimonials
import React from 'react';
import { BiTimeFive } from 'react-icons/bi'

import logo from '../../Assets/mcompany.png'
import logo2 from '../../Assets/scompany.png';
import logo3 from '../../Assets/ucompany.png';



const jobsData = [
    {
        id:1,
        image: logo,
        title: 'Desenvolvedor FrontEnd',
        time: 'Agora',
        location: 'Marabá-PA',
        descr: 'Buscamos um desenvolvedor frontend junior que tenha habilidades nas seguintes tecnologias: ReactJS, HTML, CSS, ViteJS, Tailwind.',
        company: 'Marabá-LTDA'

    },
    {
        id:2,
        image: logo2,
        title: 'Desenvolvedor WebFlow',
        time: 'Agora',
        location: 'São Paulo-SP',
        descr: 'Buscamos urgentemente um Desenvolvedor Webflow que tenha experiência para trabalhar com grandes equipes. Entre em contato conosco.',
        company: 'S Company'

    },
    {
        id:1,
        image: logo3,
        title: 'User Experience Writer Junior',
        time: 'Agora',
        location: 'Rio de Janeiro-RJ',
        descr: 'Buscamos urgentemente um UX Writer Junior para trabalhar em conjunto com a equipe de Marketing. Vaga disponível tanto remoto como híbrida.',
        company: 'U-LTDA'

    }
]

const Jobs = () => {
    return (
        <div>
            <div className="container flex gap-10 flex-wrap justify-center  items-center py-10">
                {
                    jobsData.map(({id,image,title,time,location,descr,company}) => {
                        return (
                            <div key={id} className="group group job w-[250px] p-[20px] bg-white rounded[10px] hover:bg-greenColor shadow-lg 
                                shadow-greyIsh-400/700 hover:shadow-lg">
                            <span className="flex justify-between items-center gap-4">
                            <h1 className="text-16px font-semibold text-[#959595] group-hover:text-white">{title}</h1>
                                <span className='flex items-center text-[#ccc] gap-1'>
                                 <BiTimeFive/> {time}
                                </span>
                            </span>
                                <h6 className="text-[12px]  text-[#ccc]">{location}</h6>
                                <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] 
                                 group-hover:text-white"> {descr}
                                </p>

                            <div className="company flex items-center gap-2">
                                <img src={image} alt="" className='w-[8%]' />
                                <span className="text-[12px] py-[1rem] block group-hover:text-white">{company}</span>
                            </div>

                            <button className='border-[2px] rounded-[10px] block p-[10px] w-full
                            text-[14px] font-semibold text-[#959595] hover:bg-green-500
                            group-hover/item:text-textColor group-hover:text-white'>Candidate-se Agora</button>
                            </div>

                                 )
                                })
                }
             </div>


        </div>
    )
}

export default Jobs;

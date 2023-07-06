import React from 'react';

//importar icons de react icons
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'


const Search = () => {
    return (
        <div className='search grid gap-10 bg-greyIsh rounded-[10] p-[3rem]'>
            <form action="">
                <div className='div sm:flex justify-between items-center rounded-[8px] gap-[10x] bg-white p-5 shadow-lg shadhow-greyIsh-700'>
                    <div className='flex gap-2 items-center py-1'>
                        <AiOutlineSearch className='text-[25px] icon'/>
                        <input type="text" className='bg-transparent text-greenColor focus:outline-none w-[100%]' placeholder='Pesquise por vagas...' />
                            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
                            hover:text-textColor icon'/>
                    </div>

                    <div className='flex gap-2 items-center py-1'>
                        <BsHouseDoor className='text-[25px] icon'/>
                        <input type="text" className='bg-transparent text-greenColor focus:outline-none w-[100%]' placeholder='Pesquise por empresa...' />
                            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
                            hover:text-textColor icon'/>
                    </div>

                    <div className='flex gap-2 items-center py-1'>
                        <CiLocationOn className='text-[25px] icon'/>
                        <input type="text" className='bg-transparent text-greenColor focus:outline-none w-[100%]' placeholder='Pesquise por localidade...' />
                            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
                            hover:text-textColor icon'/>
                    </div>

                    <button className='bg-greenColor h-full p-5 rounded-[10px] text-white
                    cursor-pointer hover:bg-green-500'>Pesquisar</button>
                </div>
            </form> 

            <div className='secDiv text-[13px] sm:flex items-center gap-10 justify-center'>
                <div className='singleSearch flex items-center gap-2 py-1'>
                    <label htmlFor="relevance" className='text-[#808080] font-semibold'>Ordenar por:</label>

                    <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
                    <option value="">Relevante</option>
                    <option value="">Recentes</option>
                    <option value="">Inclusivo</option>
                    </select>

                </div>

                <div className='singleSearch items-center gap-2 py-1'>
                    <label htmlFor="type" className='text-[#808080] font-semibold'>Ordenar por:</label>

                    <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1'>
                    <option value="">Remoto</option>
                    <option value="">Integral</option>
                    <option value="">Meio-período</option>
                    </select>

                </div>

                <div className='singleSearch items-center gap-2 py-1'>
                    <label htmlFor="level" className='text-[#808080] font-semibold'>Ordenar por:</label>

                    <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
                    <option value="">Trainee</option>
                    <option value="">Estagiário</option>
                    <option value="">Senior</option>
                    </select>

                </div>
            </div>

        </div>
    )
}

export default Search;
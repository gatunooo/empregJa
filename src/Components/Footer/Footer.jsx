import React from 'react';

import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return(
        <div className='footer p-[5rem] mb-4 bg-greenColor rounded-[10px] gap-10
        sm:grid grid-cols-5 m-auto items-center justify-center'>
        <div>
            <div className='logoDiv'>
            <h1 className='logo text-[23px] text-white'>
                    emprega<strong>Já</strong>
            </h1>

            </div>
            <p className='text-white pb-[10px] text-[15px] opacity-80 leading-7'>
                Nosso objetivo sempre será o seu maior sonho. Sempre ajudamos candidatos a acharem as melhores empresas de acordo com o seu perfil.
            </p>
        </div>
            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold pb-[1.5rem]  text-white'>
                    Empresa
                </span>
                <div className='grid gap-3'>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Sobre nós</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Contato</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Blog</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>

                </div>
            </div>
            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold pb-[1.5rem]  text-white'>
                    Parcerias
                </span>
                <div className='grid gap-3'>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Seja um parceiro</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Objetivo</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Invista</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Conheça os parceiros</li>

                </div>
            </div>
            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold pb-[1.5rem]  text-white'>
                    Comunidade
                </span>
                <div className='grid gap-3'>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Histórias</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Colaboradores</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Seja um de nós</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Doadores</li>

                </div>
            </div>
            <div className='grid'>
                <span className='divInfo text-[18px] font-semibold pb-[1.5rem] text-white'>Contato</span>
                <div>
                <small className='text-[14px] text-white'>empregaja@company.com.br</small>
                </div>
                <div className='icons flex gap-4 py-[1rem]'>
                    <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full' />
                    <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full' />
                    <AiOutlineTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full' />

                </div>
            </div>
        </div>
    )
}

export default Footer;
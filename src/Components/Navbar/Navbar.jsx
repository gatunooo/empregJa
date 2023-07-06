 import React from "react";

const Navbar = () => {
    return (
        <div className='navbar sm:flex justify-between items-center p-[3rem]'>
            <div className="logoDiv">
                <h1 className="logo text-[23px] text-greenColor">
                    emprega<strong>Já</strong></h1>
            </div>
            
            <div className="menu flex gap-8">
                <li className="menuList text-[#6f6f6f] hover:text-greenColor">Vagas</li>
                <li className="menuList text-[#6f6f6f] hover:text-greenColor">Sobre</li>
                <li className="menuList text-[#6f6f6f] hover:text-greenColor">Contato</li>
                <li className="menuList text-[#6f6f6f] hover:text-greenColor">Login</li>
            </div>

        </div>
    )
}

export default Navbar;
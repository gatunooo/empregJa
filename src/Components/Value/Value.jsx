import React from "react";


const Value = () => {
    return (
        <div className="mb-[4rem] mt-[6rem]">
            <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">Nossos Valores</h1>

            <div className="grid gap-[10rem] grid-cols-3 items-center">
                <div className="grid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="img p-[4px] rounder-[.8rem] bg-inherit-[#dede8f] h-[40px] w-[40px] flex items-center justify-center">
                            <img src="src\Assets\heart.png" alt="Coração" />
                        </div>
                        <span className="font-semibold text-black text-[18px]">Cuidado</span>
                    </div>
                    <p className="text-[13px] text-black opacity-[.7] py-[1rem font-semibold]">
                        Nos importamos com você. Vamos te guiar até conquistar o seu primeiro emprego.
                    </p>
                </div>

                <div className="grid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="img p-[4px] rounder-[.8rem] bg-inherit-[#dede8f] h-[40px] w-[40px] flex items-center justify-center">
                            <img src="src\Assets\friendship.png" alt="Incentivo" />
                        </div>
                        <span className="font-semibold text-black text-[18px]">Incentivo</span>
                    </div>
                    <p className="text-[13px] text-black opacity-[.7] py-[1rem font-semibold]">
                        Não há caminho fácil. Não deixaremos o desânimo atrapalhar o nosso objetivo. 
                    </p>
                </div>

                <div className="grid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className="flex items-center gap-3">
                        <div className="img p-[4px] rounder-[.8rem] bg-inherit-[#dede8f] h-[40px] w-[40px] flex items-center justify-center">
                            <img src="src\Assets\process.png" alt="Transparencia" />
                        </div>
                        <span className="font-semibold text-black text-[18px]">Transparente</span>
                    </div>
                    <p className="text-[13px] text-black opacity-[.7] py-[1rem font-semibold]">
                        Conheça o processo. Informaremos você sobre cada etapa até conquistar o seu primeiro emprego.
                    </p>
                </div>
            </div>

           <div className="card mt-[2rem] flex justify-between bg-greenColor p-[5rem] rounded-[10px]">
           <div>
                <h1 className="text-black text-[28px] font-bold">Temos empresas esperando por você</h1>
                <h2 className="text-green-800 text-[25px] font-bold">Vamos lá?</h2>
           </div>

           <button className="border-[2px] py-[4px] px-[40px] p-4 rounded-[10px] text-black font-semibold
                     hover:bg-greenColor hover:text-white border-greenColor">Candidate-se Agora</button>

           </div>
            
        </div>
    )
}

export default Value;
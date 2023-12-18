import Image from "next/image"
import miniLogo from '../assets/rox-footer.png'

export const Footer = () =>{

    return (
        <>
            <footer className="max-h-20 w-full flex flex-wrap justify-around items-center px-5 py-2 mt-8 border-t border-gray-700 pt-4 bg">
                <p className="text-center align-middle">Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.</p>
                <div className="flex justify-center items-center gap-3 align-middle flex-wrap">
                    <p className="p-7 text-center align-middle">Powered by</p>
                    <Image className='w-12' src={miniLogo} alt="Daanrox" />
                </div>
            </footer>
        </>
    )
}
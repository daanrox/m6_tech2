import Image from 'next/image'
import logo from '../assets/daanrox-logo.png'
import Link from 'next/link'

export const Header = () =>{

    return (
        <>
            <header className='w-full flex justify-around pt-5 pb-5 items-center mb-8 flex-wrap border-b border-gray-700 gap-12'  >
                
                <Image className='w-40' src={logo} alt={'Daanrox Logo'} />
                

                <div>
                    <menu>
                        <ul className='w-full flex flex-wrap gap-6 justify-center items-center text-lg h-full px-5'>
                            <Link href={"/"}><li>Início</li></Link>
                            <Link href={"/about"}><li>Sobre mim</li></Link>
                            <Link href={"/projects"}><li>Projetos</li></Link>
                            <Link href={"/contact"}><li>Contato</li></Link>
                        </ul>
                    </menu>
                </div>
            </header>
        </>
    )

}
import { Basket, HouseSimple, Note, NotePencil, PlusCircle } from '@phosphor-icons/react'
import Favicon from '../../assets/img/home.png'
import { Link } from 'react-router-dom'
import Home from '../../paginas/home/Home'
function Navbar() {
 
  

    return (
      <>
       <div className='w-full bg-blue-500 text-white flex justify-center py-2'>
      <div className="container flex justify-between text-lg">
        <div className="flex justify-left items-center"><img src={Favicon} alt="" className='w-12 p-2' />
        <div className='text-2xl font-bold uppercase font-sans'>Farmácia Generation</div>
        </div>

        <div className='flex gap-4 items-center'>
        <div className='flex px-1 items-center'><div className='px-1 items-center'><HouseSimple size={20} /></div><Link to="/" className='hover:underline'>Home</Link></div>
        <div className='flex px-1 items-center'><div className='px-1 items-center'><Basket size={20} /></div><div className='hover:underline'>Produtos</div></div>
        <div className='flex px-1 items-center'><div className='px-1 items-center'><Note size={20} /></div><Link to="/categorias" className='hover:underline'>Categorias</Link></div>
        <div className='flex px-1 items-center'><div className='px-1 items-center'><PlusCircle size={20} /></div><Link to="/cadastroCategoria" className='hover:underline'>Nova Categoria</Link></div>
        <div className='flex px-1 items-center'><div className='px-1 items-center'><PlusCircle size={20} /></div><div className='hover:underline'>Novo Produto</div></div>
            </div>
          </div>
        </div>
    </>
    )
  }
  
  export default Navbar
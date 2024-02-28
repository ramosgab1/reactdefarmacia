import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
    let data = new Date().getFullYear()
 
    return (
    <>

        <div className="flex justify-center bg-blue-500 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Farmácia Generation | &copy; {data}</p>
            <p className='text-sm uppercase'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <a href=''><LinkedinLogo size={48} weight='bold' /></a>
              <a href=''><InstagramLogo size={48} weight='bold' /></a>
              <FacebookLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer
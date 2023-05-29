import { useState, useEffect } from 'react'
import { Input } from '@/components/Input'
import { Submit } from '@/components/Buttons/Submit'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useRouter } from 'next/router'
import { Layout } from '@/components/Layout'

export default function Vender () {
  const [talles, setTalles] = useState([])
  const [, setFormData] = useState({})
  const router = useRouter()

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/talle`)
      .then(response => response.json())
      .then(data => setTalles(data))
      .catch(error => console.log(error))
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const title = event.target.elements.title.value
    const selectedTalle = event.target.elements.talle.value
    const detail = event.target.elements.detail.value
    const price = event.target.elements.price.value

    const newFormData = {
      title,
      selectedTalle,
      detail,
      price
    }

    setFormData(newFormData)
    localStorage.setItem('formData', JSON.stringify(newFormData))
    router.push('/sell/add-product/category')
  }
  const handleCancel = () => {
    localStorage.clear()
    router.push('/')
  }

  return (
    <Layout>
      <Header disabled={true} />
      <h2 className='font-bold text-4xl mt-10 mb-10 ml-10'>Vender</h2>
      <section className='flex justify-center items-center flex-col'>
        <form className='flex justify-center items-center flex-col ' onSubmit={handleFormSubmit}>
          <div>
            <Input type='text' placeholder='Titulo' name='title' />
            <p>¿Qué vas a vender? Con este nombre aparecerá publicado tu producto</p>
            <select
              className='my-0.5 w-full h-12 border border-solid  text-gray-700 text-sm font-regular leading-tight border-green-700 text-black outline-none shadow-md p-3 rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary-400 focus:ring-opacity-50 placeholder:text-sm placeholder:text-slate-400'
              name='talle'
            >
              <option value="talle">Seleccionar talle</option>
              {talles.length > 0 && talles?.map(talle => (
                <option key={talle.id} value={talle.id}>{talle.nombre}</option>
              ))}
            </select>
            <p>Toma las medidas de tu producto, revisa nuestra tabla de talles y coloca el talle correspondiente a las medidas</p>
            <Input type='text' placeholder='Detalle' name='detail' />
            <p>Describe tu producto, acá deberás aclarar si tiene mucho uso, poco uso o es nuevo</p>
            <Input type='text' placeholder='Precio' name='price' />
           <div className='flex justify-center'><Submit className="flex justify-center">Guardar Y Continuar</Submit></div>
          </div>
        </form>
        <button className='border-green-700 border w-full md:w-[28rem]  relative lg:w-[28rem] lg:h-14 py-3 select-none shadow-lg rounded-xl font-md text-lg ' onClick={handleCancel}>Cancelar</button>
      </section>
      <Footer />
    </Layout>
  )
}
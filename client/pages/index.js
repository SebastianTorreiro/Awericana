import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import Categories from '@/components/Category/Categories'
import Link from 'next/link'

export default function Home ({ publicaciones = [] }) {
  return (
    <Layout>
      <Head>
        <title>Inicio | Awericana</title>
      </Head>
      <Header />

      <Banner />

      <div className="p-4">
        <section>
          <Categories />
        </section>
        <h1 className='text-2xl font-semibold ml-5 mt-10'>Productos destacados</h1>
        <section className='flex flex-wrap justify-center gap-4'>
          {publicaciones.length > 0 && publicaciones.map(pub => {
            return (
              <Link href={'/detail/:id'} as={`/detail/${pub.id}`} key={pub.id}>
                <Card
                  precio={pub.precio}
                  titulo={pub.titulo}
                  talleMedidas={pub.talle.nombre}
                  imgSrc={pub.imagenPortada || null}
                  precioOriginal={pub.precioOriginal}
                  descuento={pub.descuento}
                   />
              </Link>
            )
          })}
        </section>
      </div>
    </Layout>
  )
}

export async function getServerSideProps (ctx) {
  const publicacionesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/publicaciones?offset=0&limit=100`)
  const publicaciones = await publicacionesResponse.json()

  return {
    props: {
      publicaciones: publicaciones.publicaciones
    }
  }
}

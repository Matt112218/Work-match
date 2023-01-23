// 'use client';
import { postProject, getProject } from '@/utils/api/project';
// import { useState } from 'react';
import styles from '../app/page.module.css';
import Cardjob from '../components/Cardjob';
// import prueba from '../components/contenido';
// import BasicPagination from '../components/Paginate/Pagination';

export default async function Home() {
  // const [paginate, setPaginate] = useState(prueba.slice(0, 5));  
  const projectSeed = {
    // id: 1,
    title: 'limpiar1',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las impr,Lorem Ipsum es simplemente el texto de relleno de las impr,Lorem Ipsum es simplemente el texto de relleno de las imprLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
    address: 'lejos 123',
    budget: 100,
    agreement: true,
  };
//ESTO CREA PUBLICACIONES DE PRUEBA DESACTIVAR LUEGO  
console.log(postProject(projectSeed))

  // const paginate = async () => await getProject();  
  const paginate = await getProject();
  return (
    <main className={`container`}>
      <section className={`${styles['container_grid']}`}>
        {paginate.map((x) => ( 
          <Cardjob
            key={x.id.toString()}
            title={x.title}
            address={x.address}
            // imagen={x.imagen}
            description={x.description}
            budget={x.budget}
            // hora={x.hora}
          />
        ))        
      }
      </section>
      {/* <BasicPagination prueba={prueba} setPaginate={setPaginate} /> */}
    </main>
  );
}
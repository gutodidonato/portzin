import './style.css'
import image from '../../../../public/eu.png';



function Home() {
  




  return (
    <div className="container">
        <div className='container-bloco'>
            <div className='container-coluna1'>
                <div className='container-engrenagem'>
                    <div className='container-eu'>
                        <img src={image} alt="imagem do individuo do site" />
                    </div>
                </div>
            </div>
            <div className='container-coluna2'>
                <p>Teste</p>
            </div>
        </div>
    </div>

  )
}

export default Home;
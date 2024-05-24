import './style.css'




function Navbar() {

  function handleAtivacao(botao){
    if (botao.target.className === 'Inativo'){
      console.log(botao.target.className)
      const botaoAnterior = document.querySelector('.Ativo');
      botaoAnterior?.classList.replace('Ativo', 'Inativo');
      botao.target.classList.replace('Inativo', 'Ativo');
    }
    
  }
  




  return (
      <header className='elemento-fodido'>
        <nav className='header-nav'>
            <ul className='header-listagem'>
                <li><a onClick={(element) => handleAtivacao(element)} className='Ativo' >Me</a></li>
                <li><a onClick={(element) => handleAtivacao(element)} className='Inativo'>Powers</a></li>
            </ul>
            <ul className='header-listagem'>
                <li><a onClick={(element) => handleAtivacao(element)} className='Inativo'>Projects</a></li>
                <li><a onClick={(element) => handleAtivacao(element)} className='Inativo'>Contact</a></li>
            </ul>
        </nav>
      </header>
  )
}

export default Navbar;
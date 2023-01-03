export default function DarkMode () {
  function toggleDark(){
    let element = document.querySelector('.page');
    element.classList.add("dark-mode");
  }

  function toggleLight(){
    let element = document.querySelector('.page');
    element.classList.remove("dark-mode");
  }

  return (
    <div className='page'>
      <button className='dark-mode-button' onClick={toggleDark}>Dark Mode</button>
      <button className='light-mode-button' onClick={toggleLight}>Light Mode</button>
    </div>
  )
}



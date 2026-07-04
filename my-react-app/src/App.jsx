import './app.css'
import Header from './Header'
import Footer from './Footer'
import Card from './Card'

function App() {

  return (
   <>

    <Header/>

    <div className='flex flex-row justify-around flex-wrap'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    
    <Footer/>

   </>
  )
}

export default App

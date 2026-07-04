import './app.css'
import Header from './Header'
import Footer from './Footer'
import Card from './Card'

function App() {

  return (
   <>

    <Header/>

    <div className='flex flex-row justify-around flex-wrap'>
      <Card name='Kirill' age={21} topic={'Learning react and searching for a job'} showAge={true}/>
      <Card name='Nikita' age={21} topic={'Driving the truck'} showAge={true}/>
      <Card name='Vadim' age={22} topic={'Writing samp bots'} showAge={false}/>
    </div>
    
    <Footer/>

   </>
  )
}

export default App

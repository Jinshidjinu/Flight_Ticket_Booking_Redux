
import './App.css'
import Header from './components/Header'

import ParisVideo from '../src/assets/Images/102953bdc4f8bcd8a8633879bfdc475a-Eiffel Tower 1080p.mp4'

import Booking  from './components/Booking'


function App() {

  return (
    <div className='bg-[url(../src/assets/Images/img2.jpg)] bg-cover bg-center bg-no-repeat'>
         <Header/>
      <section className='h-screen'>
       <Booking/>
        <div>footer</div>
      </section>

    </div>
  )
}

export default App

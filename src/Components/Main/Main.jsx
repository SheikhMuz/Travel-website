import React, {useEffect} from 'react'
import './main.css'

import Char from '../../Assests/Char.jpg'
import Taj from '../../Assests/Taj.jpg'
import Banglore from '../../Assests/Banglore.jpg'
import img4 from '../../Assests/img4.jpg'
import Leh from '../../Assests/Leh.jpg'
import img from '../../Assests/img.jpg'
import img6 from '../../Assests/img6.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import  'aos/dist/aos.css'

const data = [
  {
    id:1,
    imgSrc : Char,
    destTitle:'Charminar',
    location:'Hyderabad',
    grade:'Cultural Relax',
    fees: '₹700',
    description: 'The Four Minarets'


},
{
  id:2,
  imgSrc : Taj,
  destTitle:'Taj Mahal ',
  location:'Agra',
  grade:'History',
  fees: '₹1000',
  description: 'the epitome  of Rommance,Taj Mahal is a prominent image that is associated with India, and in this way has become a symbol of India itself'


},
{
  id:3,
  imgSrc : Banglore,
  destTitle:'Mysore Palace',
  location:'Mysore',
  grade:'Cultural Relax',
  fees: '₹999',
  description: ' Taj Mahal is a prominent image that is associated with India, and in this way has become a symbol of India itself.'


},
{
  id:4,
  imgSrc : img4,
  destTitle:'Srinagar',
  location:'Kashmir',
  grade:'Cultural Relax',
  fees: '₹6999',
  description: 'Famously known as Heaven on Earth, Srinagar is located in the union territory of Jammu & Kashmir, on the banks of river Jhelum. Srinagar is known for the stationary houseboats and gondola-type rowboats- Shikaras on Dal Lake. Adorned with tranquil Dal Lake & Nigeen lake, Srinagar is the dream destination for honeymoon and family holidays.'


},
{
  id:5,
  imgSrc : Leh,
  destTitle:'Leh-Ladakh',
  location:'Ladakh',
  grade:'Cultural Relax',
  fees: '₹5699',
  description: 'India own Moonland'


},
{
  id:6,
  imgSrc : img6,
  destTitle:'Bangalore',
  location:'Bangalore',
  grade:'Cultural Relax',
  fees: '₹2700',
  description: 'The Garden City of India'


},
{
  id:7,
  imgSrc : img,
  destTitle:'Gulmarg',
  location:'Kashmir',
  grade:'Cultural Relax',
  fees: '₹1700',
  description: 'Heart of Winter Sports'


}

]
const Main = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
      },[])
  return (
  <section className='main container section'>
    <div className="secTitle">
      <h3 data-Aos="fade-right"  className='title'>
        Most visited destinations
      </h3>
    </div>

    <div className="secContent grid">
{
  data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
return(
  <div key={id}
  data-Aos="fade-up"
  className="singleDestination">

<div className="imageDiv">
  <img src={imgSrc} alt={destTitle} />
</div>

<div className="cardInfo">
  <h4 className="destTitle">
    {destTitle}
  </h4>
  <span className="continent flex">
<HiOutlineLocationMarker className='icon'/>
<span className="name">{location}</span>
  </span>

<div className="fees flex">
  <div className="grade">
    <span >{grade}<small>+1</small></span>
  </div>
  <div className="price">
    <h5>{fees}</h5>
  </div>
</div>
<div className="desc">
  <p>{description}</p>
</div>
<button className='btn flex'>
  DETAILS <HiOutlineClipboardCheck className="icon"/>
</button>
</div>
  </div>
)
  })
}

    </div>

  </section>
  )
}

export default Main
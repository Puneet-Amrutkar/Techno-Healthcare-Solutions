import React, { useState } from 'react'
import './testimonials.css'

const Testimonials = () => {
    const words=[
        {id:0,value:"Very good website. Well thought about booking/rescheduling/cancelling an appointment. Also doctors feedback mechanism is very refined and consumer friendy. Doctors are also well qualified. Thank you Techno Healthcare Solutions.", customer: "Mrs. Jyothi Bhatia"},
        {id:1,value:"Very easy to book, maintain history. Hassle free from older version of booking appointments via telephone... Thanks Techno Healthcare for making it simple and reliable.", customer: "Mr. Avinash Kumar"},
        {id:2,value:"Very eaasy to book, maintain history. Hassle free from older version of booking appointments via telephone... Thanks Techno Healthcare for making it simple and reliable.", customer: "Mrs. Jyothi Bhatia"},
      ];
      const [wordData,setWordData]=useState(words[0].value)
      const [wordDataCust,setWordDataCust]=useState(words[0].customer)
      const handleClick=(index)=>{
        console.log(index)
        const wordSlider=words[index].value;
        const wordSliderCust=words[index].customer;
        setWordData(wordSlider)
        setWordDataCust(wordSliderCust)
      }
      return (
        <div className="main">
          <div className="sub-main">
            <h1>What Our Customers Have to Say</h1>
            <div className="words" id='words'>" {wordData} "</div>
            <div className="customers" id='customers'>{wordDataCust}</div>
          <div className='flex_row'>
            {words.map((data,i)=>
              <h1 key={i} onClick={()=>handleClick(i)}>.</h1>
            )}
          </div>
        </div>
        </div>
    )
}

export default Testimonials

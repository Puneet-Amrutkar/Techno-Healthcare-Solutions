import React, { useState, useEffect } from 'react'
import './findmedicines.css';

const FindMedicines = () => {
    const [endPoint, setEndPoint] = useState("");
    const [container, setContainer] = useState([]);

    useEffect(() => {
        if (endPoint) {
            fetchMe()
        }
    }, [endPoint]);

const fetchMe = async () => {
    try{
   let req = await fetch(`https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=+${endPoint}`, {
    "method": "GET",
    "headers": {
        'X-RapidAPI-Key': 'd94d80919bmsha477398b70c0097p1e96fdjsna290fe574ff9',
        'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
    }
})
let res = await req.json();
if(res){
    setContainer(res);
}
}catch(err){
    console.log(err)
    }
}

const onChangeHandler = (e) => {
    setEndPoint(e.target.value);
}

const submitHandler = (e) => {
    e.preventDefault();
    fetchMe();
}

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" value={endPoint} onChange={onChangeHandler} />
            <button type="submit">Submit</button>
        </form>
        {container && container.map((item) => {
            return (
                <div>
                    <h1>{item.generic_name}</h1>
                    <p>{item.dosage_form}</p>
                </div>
            );
        })}
        {
            container.length == 0 && <p>No results found!</p>
        }
    </div>
  )
}

export default FindMedicines
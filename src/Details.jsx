import React, { useContext, useState } from "react";
import Home from "./Home";
import { StateContext } from "./Context";


function Details() {
    const [statee,setState] = useState({
        name : '',
        description : ''
    })
    // const [array, setArray] = useState([]);
    const {setArray} = useContext(StateContext)
console.log(statee);

    const handleChange =(e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setState({...statee, [name]:value})
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setArray(prev => ([
            ...prev, statee
        ]));
        console.log("ifdhgsjfjdh");
        
    }

    
  return (
    <div>
      <div className="detailsdiv">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Your Name :</label>
            <input type="text" placeholder="Enter Name"required name="name" onChange={handleChange}/>
            <br />
            <br />
            <br />
            <br />
            <label htmlFor="">description :</label>
            <input type="text"placeholder="description" required name="description" onChange={handleChange}/>
            <br />
            <br />
            <button className="oksubmit" >ok</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Details;

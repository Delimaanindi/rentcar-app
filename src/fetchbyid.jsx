import React, { useState, useEffect } from "react";
import axios from "axios";
import './searchingres.css'
import Carcard from "./carCard";

function FetchbyId () {
    const [data, setData] = useState([])

    const fetchById = async () => {
      try{
        const response = await axios.get("https://bootcamp-rent-car.herokuapp.com/admin/car/{id}");

        
        if(!response.data) {
          throw new Error('invalid data response');
          
        }
        setData(response.data)
      }
      catch(err){
        console.error(err)
      }
    }
    
      useEffect(() => {
        fetchById();
       }, []);
    
       return (
        <>
        <div className="carList" key={data.id}>
            {data.map(d => {
             if(!d || !d.name) {
              return null;
             }
               return <Carcard 
                image={d.image}
                carName={d.name}
                carPrice={d.price} 
                />
            }
            )
            }
        </div> 
        </>
      );
    }  

export default FetchbyId;
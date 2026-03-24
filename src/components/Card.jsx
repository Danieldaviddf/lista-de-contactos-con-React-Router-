
import React from "react";

export const Card = ({datos, eliminar}) => {

  

    return (
        <div className="container">
            {datos.map((item)=>(
                <div key={item.id} className="card" style={{width: 200}} >
                <img src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp11496091.jpg&f=1&nofb=1&ipt=8d9343a52e3690e39f0c5832e4e7387e19360d88d4aa1af22910439591bb1858'} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.phone}</p>
                    <p className="card-text">{item.email}</p>
                    <p className="card-text">{item.address}</p>
                    <button type="button" className="btn btn-primary" onClick={()=>eliminar(item.id)}>Borrame</button>
                </div>
            </div>
            ))}
            
       </div>
    );
}; 
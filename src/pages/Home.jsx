import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";
import { useEffect, useState } from "react"; 


export const Home = () => {
const {store, dispatch} =useGlobalReducer();
const[datos, setDatos] = useState([]);

const agendaNueva = () => {
	fetch('https://playground.4geeks.com/contact/agendas/alexis12', {method: "POST"})
	.then((res)=> res.json())
	.then((data)=>{console.log(data);
return data;})
	.catch(error => console.log(error))
}


async function contacto(){
	try{
		let response = await fetch('https://playground.4geeks.com/contact/agendas/alexis12', {method: "GET"});
		let data = await response.json() 
		if(!response.ok){agendaNueva()}

		return setDatos(data.contacts)
	} catch(error) {
		return console.log(error)
	}
	


	
}

const eliminar = (id) => {
    fetch(`https://playground.4geeks.com/contact/agendas/alexis12/contacts/${id}`, {
      method: "DELETE",
    })
      .then(() => contacto())
      .catch((error) => console.log(error));
  };


useEffect(() => {
	contacto()
}, [])

	return (
		<div className="text-center mt-5">
			<Card datos={datos} eliminar={eliminar} actualizar={contacto}/>
		</div>
	);
}; 


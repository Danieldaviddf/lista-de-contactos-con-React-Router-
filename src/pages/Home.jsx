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


const contacto = () =>{
	fetch('https://playground.4geeks.com/contact/agendas/alexis12', {method: "GET"})
	.then((res)=> {if(res.status === 404){
			agendaNueva()
		} return res.json()})
	.then((data)=>setDatos(data.contacts))
	.catch(error => console.log(error))
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


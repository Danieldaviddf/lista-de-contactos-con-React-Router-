
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Form } from "../components/Form.jsx";

export const AddContact = () => {

  const {store, dispatch} =useGlobalReducer()

    return (
        <div className="container-row text-center mt-5">
            <Form/>
        </div>
    );
}; 
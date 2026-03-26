import React, { useState } from "react";

const EditForm = ({ datos, onClose, actualizar }) => {
  // Inicializamos el estado con los datos actuales del item
  const [formData, setFormData] = useState({
    name: datos.name,
    phone: datos.phone,
    email: datos.email,
    address: datos.address,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://playground.4geeks.com/contact/agendas/alexis12/contacts/${datos.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la actualización");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Actualizado con éxito:", data);
        actualizar(); // Refresca la lista en el componente padre
        onClose();    // Cierra el formulario
      })
      .catch((error) => {
        console.error("Hubo un error:", error);
        alert("No se pudo actualizar el registro");
      });
  };

  return (
    <div className="card p-4 mt-3 shadow">
      <h3>Editar Registro</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" name="name" className="form-label" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input type="text" name="phone" className="form-label" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-label" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input type="text" name="address" className="form-label" value={formData.address} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-success me-2">Guardar Cambios</button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
};

export default EditForm;

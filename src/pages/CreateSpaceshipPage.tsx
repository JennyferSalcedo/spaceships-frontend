import { useRef, useState } from 'react';
import { useFetch, useForm } from '../hooks';

export const CreateSpaceshipPage = () => {
  /**
   * Con este react hooks mantengo la referencia de los radioButtons, así me aseguro que estén en falso o verdadero según corresponda
   */
  const cells = useRef(false);

  /**
   * Con este customHook me encargo de tener un control completo sobre los campos del formulario, asignarles un valor inicial,
   * cambiar su valor con la función onChange para actualizarlos en tiempo real y devolver el formulario a su estado inicial
   */
  const {
    formState,
    fuel,
    groundClearance,
    height,
    name,
    numberOfSeats,
    speed,
    weight,
    loadedWeight,
    pushingPower,
    onInputChange,
    onRadioChange,
    onResetForm,
  } = useForm({
    name: '',
    weight: '',
    pushingPower: 0,
    loadedWeight: '',
    height: 0,
    fuel: '',
    speed: '',
    hasCells: cells.current,
    groundClearance: '',
    numberOfSeats: 0,
  });

  /**
   * Endpoint de mi backend
   */
  const baseURL = 'http://localhost:8080/v1/api/spaceships';

  const { postFetch } = useFetch(baseURL);

  /**
   * Este método lo utilizo para cambiar el valor del campo hasCells en la petición, invirtiendo el valor según lo que el usuario realice
   */
  const handleRadioButtons = (e: any) => {
    /** Si hasCells = false entonces --> hasCells = true y viceversa */
    cells.current = !cells.current;
    onRadioChange(e, cells.current);
  };

  const handleSubmitForm = (e: any) => {
    // Con esto evito que al enviar el formulario la página se recargue
    e.preventDefault();
    // Envío la petición post al backend
    postFetch(formState);
    // Devuelvo los inputs a su estado inicial
    onResetForm();
    cells.current = false;
  };

  return (
    <div className="mainContainer">
      <div className="container formContainer">
        <form className="prueba" onSubmit={handleSubmitForm}>
          <div className="TitleContainer">
            <h4>
              ¿Eres un apasionado por el espacio y quieres crear tu propio
              inventario de naves espaciales?
            </h4>
            <h5>Si es así ¡Empecemos! Descríbeme tu nave espacial:</h5>
          </div>

          <div className="midItem">
            <p className="obligatory">
              Los campos marcados con * son obligatorios
            </p>
            <p className="obligatory">
              Los valores decimales deben ser enviados usando un punto,{' '}
              <strong>Ejemplo 42.5</strong>
            </p>
            <h6>
              En caso de no contar con la información de algún campo, por favor,
              ¡déjalo vacío!
            </h6>
          </div>

          <div className="fieldsContainer">
            <div className="row">
              <label htmlFor="name" className="col labelContainer">
                <span className="labelText">
                  Nombre de tu nave: <span className="obligatory">*</span>
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Saturno V"
                  value={name}
                  onChange={onInputChange}
                />
              </label>
              <label htmlFor="weight" className="col labelContainer">
                <span className="labelText">
                  Peso: <span className="obligatory">*</span>
                </span>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  required
                  placeholder="3500"
                  value={weight}
                  onChange={onInputChange}
                />
              </label>
              <label htmlFor="pushingPower" className="col labelContainer">
                <span className="labelText">Potencia de empuje:</span>
                <input
                  type="number"
                  id="pushingPower"
                  name="pushingPower"
                  placeholder="2900"
                  value={pushingPower}
                  onChange={onInputChange}
                />
              </label>
              <label htmlFor="loadedWeight" className="col labelContainer">
                <span className="labelText">Peso de carga:</span>
                <input
                  type="number"
                  id="loadedWeight"
                  name="loadedWeight"
                  placeholder="118"
                  value={loadedWeight}
                  onChange={onInputChange}
                />
              </label>
            </div>

            <div className="row">
              <label htmlFor="height" className="col labelContainer">
                <span className="labelText">Altura cohete:</span>
                <input
                  id="height"
                  type="number"
                  name="height"
                  placeholder="Distancia numérica en metros"
                  value={height}
                  onChange={onInputChange}
                />
              </label>
              <label htmlFor="fuel" className="col labelContainer">
                <span className="labelText">Combustible:</span>
                <input
                  id="fuel"
                  type="text"
                  name="fuel"
                  placeholder="Propelente líquido"
                  value={fuel}
                  onChange={onInputChange}
                />
              </label>
              <label htmlFor="speed" className="col labelContainer">
                <span className="labelText">Velocidad:</span>
                <input
                  id="speed"
                  type="number"
                  name="speed"
                  placeholder="1200 km/h"
                  value={speed}
                  onChange={onInputChange}
                />
              </label>
            </div>

            <div className="row">
              {/* <div> */}
              <label htmlFor="hasCells" className="col radios">
                <span className="labelText item1">
                  ¿Tiene celdas fotovoltaicas?:
                </span>
                <div className="item2">
                  <input
                    id="hasCells"
                    type="radio"
                    name="hasCells"
                    onChange={handleRadioButtons}
                  />
                  <span className="item2">Sí</span>
                  <input
                    id="hasCells"
                    type="radio"
                    name="hasCells"
                    onChange={handleRadioButtons}
                    checked={cells.current ? false : true}
                  />
                  <span className="item2">No</span>
                </div>
              </label>
              {/* </div> */}
              <label htmlFor="groundClearance" className="col labelContainer">
                <span className="labelText">Distancia desde la tierra:</span>
                <input
                  id="groundClearance"
                  type="number"
                  name="groundClearance"
                  placeholder="Distancia numérica en metros"
                  value={groundClearance}
                  onChange={onInputChange}
                />
              </label>
              <label htmlFor="numberOfSeats" className="col labelContainer">
                <span className="labelText">N° pasajeros:</span>
                <input
                  id="numberOfSeats"
                  type="number"
                  name="numberOfSeats"
                  placeholder="100"
                  value={numberOfSeats}
                  onChange={onInputChange}
                />
              </label>
            </div>
          </div>
          <div className="buttonContainer">
            <button className="button" type="submit">
              Crear Nave Espacial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

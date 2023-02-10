import { useState } from 'react';
import { useFetch } from '../hooks';
import { GridSpaceships } from '../components';


export const SearchSpaceshipPage = () => {
  /**
   * Manejo el estado del input, para realizar la petición al backend
   */
  const [inputValue, setInputValue] = useState('');
  /**
   * Armo el endpoint que enviaré al backend
   */
  const baseURL = `http://localhost:8080/v1/api/spaceships/filter?name=${inputValue.trim()}`;
  /**
   * Le realizó la petición al backend con el criterio de búsqueda de mi input
   */
  const { data = [], getFetch } = useFetch(baseURL);

  /**
   * Manejo el cliqueo de información del usuario
   */
  const onInputChange = ({ target }: any) => {
    setInputValue(target.value);
  };

  /**
   * Envío la información al backend
   */
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    console.log('inputValue', inputValue);
    getFetch();
    setInputValue('');
  };


  return (
    <div className="searchContainer">
      <form onSubmit={onSubmit} aria-label="form">
        <input
          type="text"
          placeholder="Busca tus naves. Escribe un nombre, ejemplo: Saturno V"
          value={inputValue}
          onChange={onInputChange}
          className="searchInput"
        />
        {/* <button type="submit" className="button">
          Buscar nave
        </button> */}
      </form>
      {/* Dibujo las cartas dependiendo del criterio de búsqueda del usuario */}
      {data && <GridSpaceships data={data} />}
    </div>
  );
};

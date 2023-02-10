import { GridSpaceships } from '../components';
import { useFetch } from '../hooks/useFetch';

export const SpaceshipInventoryPage = () => {
  /**
   * URL de mi backend - endpoint que estoy consumiendo
   */
  const baseURL = 'http://localhost:8080/v1/api/spaceships';


/**
 * hago petición al backend para obtener mis datos guardados
 */
  const { data = [] } = useFetch(baseURL);

  return (
    <div className="inventoryContainer">
      <h1 className='inventoryTitle'>Tus naves:</h1>
      <hr className='inventoryTitle' />
      {/* /** Componente GRID */ }
      <GridSpaceships data={data} />
    </div>
  );
};

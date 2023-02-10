import { SpaceshipResponse } from '../interfaces/spaceships-response-interface';
import UnmannedSpaceCraftImage from '../assets/notripulada.png';
import MannedSpaceCraftImage from '../assets/tripulada.png';
import ShuttleVehicleImage from '../assets/lanzadera.png';

export const Card = ({
  name,
  pushingPower,
  type,
  weight,
}: SpaceshipResponse) => {
  let imageSource;

  switch (type) {
    case 'Vehículo lanzadera':
      imageSource = ShuttleVehicleImage;
      break;
    case 'Nave espacial no tripulada':
      imageSource = UnmannedSpaceCraftImage;
      break;
    case 'Nave espacial tripulada':
      imageSource = MannedSpaceCraftImage;
      break;
    default:
      break;
  }

  return (
    <div className="card col-sm-auto cardSpaceship" style={{ width: '18rem' }}>
      <img className="card-img-top" src={imageSource} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{type}</p>
      </div>
      <ul className="list-group list-group-flush">
        {pushingPower && (
          <li className="list-group-item">{`Potencia de empuje: ${pushingPower}`}</li>
        )}

        <li className="list-group-item">{`Peso: ${weight}`}</li>
      </ul>
    </div>
  );
};

// * Abstracciones de propiedades en tipos de naves

// Nave Espacial
export interface Spaceship {
  // nombre
  name: string;
  // peso
  weight: number;
}

// Nave Espacial con empuje
export interface ThrustSpaceship extends Spaceship {
  // Potencia de empuje
  pushingPower: number;
}

// Vehículo lanzadera
export interface ShuttleVehicle extends ThrustSpaceship {
  // peso de carga
  loadedWeight: number;
  // altura
  height: number;
  // combustible
  fuel: string;
}

// Naves espaciales no tripuladas
export interface UnmannedSpaceCraft extends ThrustSpaceship {
  // velocidad
  speed: string;
  // tiene celdas
  hasCells: boolean;
}

// Naves espaciales tripuladas
export interface MannedSpaceCraft extends Spaceship {
  // distancia desde el suelo hasta la nave
  groundClearance: string;
  // número de asientos
  numberOfSeats: number;
}


// Petición HTTP a backend
export interface SpaceshipCreateRequest {
  name:            string;
  weight:          string;
  pushingPower?:   number;
  loadedWeight?:   string;
  height?:          number;
  fuel?:            string;
  speed?:           string;
  hasCells?:        boolean;
  groundClearance?: null | string;
  numberOfSeats?:  number | null;
}


import { Card } from "./"
import { SpaceshipResponse } from "../interfaces"

interface Props {
    data: SpaceshipResponse[] | null
}

export const GridSpaceships = ({data}: Props) => {
  return (
    <div className="container">
      {/* Mapeo cada una de las naves que llegan desde el backend y creo una carta por cada una */}
        <div className="row">
          {data?.map((spaceship: SpaceshipResponse) => (
            <Card key={spaceship.id} {...spaceship} />
          ))}
        </div>
      </div>
  )
}

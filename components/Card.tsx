import { FC } from 'react';

type Props = {
  model: string;
  make: string;
  year: number;
  picture: string;
};

const Card: FC<Props> = ({ model, make, year, picture }) => (
  <div className="card w-72 bg-base-100 shadow-xl">
    <figure>
      <img src={picture} alt={model} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {model}
        <div className="badge badge-success">{year}</div>
        <div className="badge badge-info">{make}</div>
      </h2>
    </div>
  </div>
);

export default Card;

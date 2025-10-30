import { useContext } from "react";
import DataContext from "../contexts/DataContext";

function Card = {
  const {data} = useContext (DataContext);
  return (
    <div>
    <img src={data.image} alt={data.name} />;
    <h3> {data.name}</h3>
    <p>{data.homeworld}</p>
    <p>{data.species}</p>
    {/* //button// 
    // demander plus d'informations pour le recrutement */}
    </div>
 );
}
export default Card;
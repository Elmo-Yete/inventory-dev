export interface Props {
  img: string;
  category: string;
  specs: number;
  isNew?: boolean;
}

export default function Games(props: Props) {
  return (
    <article className="cardContainer">
      <a href="#" className="cardWrapper">
        {props.isNew && <span className="newGame">Nuevo</span>}
        <img src={props.img}></img>
        <h5>{props.category}</h5>
        <p>{props.specs} espectadores</p>
      </a>
    </article>
  );
}

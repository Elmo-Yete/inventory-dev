export interface Props {
  img: string;
  streamer: string;
  viewers: number;
  game: string;
}

export default function Streamer(props: Props) {
  return (
    <a
      href="#"
      className={`${props.viewers < 0 ? "negativeViewers" : "streamersList"}`}>
      <li className="streamerCard">
        <img src={props.img} className="streamerImg"></img>
        <div>
          <p className="streamerName">{props.streamer}</p>
          {props.viewers >= 0 && <p className="game">{props.game}</p>}
        </div>
        {props.viewers >= 0 && (
          <>
            <div className="viewersContainer">
              <p className="viewers">{`${props.viewers}🔴`}</p>
            </div>
          </>
        )}
      </li>
    </a>
  );
}

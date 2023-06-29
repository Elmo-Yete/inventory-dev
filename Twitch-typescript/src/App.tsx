import Streamer from "./components/Streamer";
import { Streamers } from "./data/streamers";
import Games from "./components/Games";
import { GamesData } from "./data/games";

function App() {
  return (
    <>
      <section className="twitch">
        <aside className="streamers">
          <ul className="streamers-bar">
            {Streamers.map((streamer, index) => {
              return (
                <Streamer
                  key={`streamer-li-${index}`}
                  img={streamer.img}
                  streamer={streamer.streamer}
                  viewers={streamer.viewers}
                  game={streamer.game}
                />
              );
            })}
          </ul>
        </aside>
        <main className="gamesCards">
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"
            category="Valorant"
            specs={325}
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg"
            category="Diablo IV"
            specs={894}
            isNew={true}
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg"
            category="Rust"
            specs={974}
          />
          {GamesData.map((game, index) => {
            return (
              <Games
                key={`game-li-${index}`}
                img={game.img}
                category={game.category}
                specs={game.specs}
              />
            );
          })}
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/518203-285x380.jpg"
            category="Sports"
            specs={63.8}
            isNew={true}
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"
            category="Gta V"
            specs={631.2}
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg"
            category="Fortnite"
            specs={547}
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"
            category="Just Chatting"
            specs={671}
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/245018539_IGDB-285x380.jpg"
            category="Only Up!"
            specs={846}
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg"
            category="Minecraft"
            specs={712}
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/30921-285x380.jpg"
            category="Rocket League"
            specs={187}
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/515025-285x380.jpg"
            category="Overwatch"
            specs={620}
            isNew={true}
          />
          <Games
            img="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg"
            category="Apex Legends"
            specs={230}
          />
        </main>
      </section>
    </>
  );
}

export default App;

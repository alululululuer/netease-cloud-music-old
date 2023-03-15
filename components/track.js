import Link from "next/link";

const Track = ({ number, name, artists }) => {
  return (
    <article className="track">
      <span className="track__number">{number}</span>
      <h4 className="track__name">{name}</h4>
      <div className="track__artists">
        {artists.map((artist) => (
          <Link key={artist.id} href={`/artist/${artist.id}`} className="artist">
            {artist.name}
          </Link>
        ))}
      </div>
    </article>
  );
};
export default Track;

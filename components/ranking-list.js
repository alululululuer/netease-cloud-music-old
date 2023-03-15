import useSWR from "swr";

import Track from "./track";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const RankingList = ({ id, name, coverImgUrl, updateTime }) => {
  const { data, error, isLoading } = useSWR(
    `https://music-api-luking.vercel.app/playlist/detail?id=${id}`,
    fetcher
  );
  const updateMonth = new Date(updateTime).getMonth() + 1;
  const updateDay = new Date(updateTime).getDate();

  const formatDate = `${updateMonth >= 10 ? updateMonth : "0" + updateMonth}月${
    updateDay >= 10 ? updateDay : "0" + updateDay
  }日更新`;

  return (
    <article className="rankinglist">
      <div className="rankinglist__img">
        <h3 className="visually-hidden">{name}</h3>
        <img src={coverImgUrl} alt={name} />
        <p className="rankinglist__updatetime">{formatDate}</p>
      </div>
      <section className="rankinglist__tracks">
        {data?.playlist.tracks.slice(0, 5).map((track, index) => (
          <Track key={track.id} number={index + 1} name={track.name} artists={track.ar} />
        ))}
      </section>
      <a href={`/playlist/${id}`} className="rankinglist__link">
        查看全部 &gt;
      </a>
    </article>
  );
};
export default RankingList;

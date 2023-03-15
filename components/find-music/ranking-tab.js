import useSWR from "swr";

import RankingList from "../ranking-list";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const RankingTab = () => {
  const { data, error, isLoading } = useSWR(
    "https://music-api-luking.vercel.app/toplist",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // 渲染数据
  return (
    <>
      <h2 className="fs-secondary-heading fw-bold">官方榜</h2>
      {data.list?.slice(0, 4).map((item) => (
        <RankingList
          key={item.id}
          id={item.id}
          name={item.name}
          coverImgUrl={item.coverImgUrl}
          updateTime={item.updateTime}
        />
      ))}
      <h2 className="fs-secondary-heading fw-bold">全球榜</h2>
      <div className="five-columns">
        {data.list?.slice(4).map((item) => (
          <div key={item.id} className="ranking-card">
            <div className="ranking-card__img">
              <img src={item.coverImgUrl} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};
export default RankingTab;

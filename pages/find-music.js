import React, { useState } from "react";

import RecommendedTab from "@/components/find-music/recommended-tab";
import CustomizedTab from "@/components/find-music/customized-tab";
import PlaylistTab from "@/components/find-music/playlist-tab";
import RankingTab from "@/components/find-music/ranking-tab";
import ArtistTab from "@/components/find-music/artist-tab";
import NewestTab from "@/components/find-music/newest-tab";

const tabs = [
  { component: <RecommendedTab />, text: "个性推荐" },
  { component: <CustomizedTab />, text: "专属订制" },
  { component: <PlaylistTab />, text: "歌单" },
  { component: <RankingTab />, text: "排行榜" },
  { component: <ArtistTab />, text: "歌手" },
  { component: <NewestTab />, text: "最新音乐" },
];

const FindMusic = () => {
  const [tab, setTab] = useState("个性推荐");
  return (
    <>
      <nav className="nav">
        <ul className="tab-list">
          {tabs.map((item) => (
            <li
              key={item.text}
              onClick={() => setTab(item.text)}
              className={item.text === tab ? "tab__item tab__item--active" : "tab__item"}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </nav>

      <div className="container">
        {tabs.map((item) => {
          if (item.text === tab) {
            return <React.Fragment key={item.text}>{item.component}</React.Fragment>;
          }
        })}
      </div>
    </>
  );
};
export default FindMusic;

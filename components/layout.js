import Head from "next/head";

import Header from "./header";
import Sidebar from "./sidebar";
import MusicPlayer from "./music-player";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>网易云音乐</title>
      </Head>
      <Header />
      <main className="main">
        <Sidebar />
        <div className="main-content">{children}</div>
      </main>
      <MusicPlayer />
    </>
  );
};
export default Layout;

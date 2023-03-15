import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href="/" className="logo">
        <i className="ri-netease-cloud-music-fill logo__icon"></i>
        网易云音乐
      </Link>
      <div className="searchbar">搜索框</div>
      <div className="profile">个人信息</div>
    </header>
  );
};
export default Header;

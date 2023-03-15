import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="menu">
          <Link
            href="/find-music"
            className={
              router.pathname.includes("/find-music")
                ? "menu__item menu__item--active"
                : "menu__item"
            }
          >
            发现音乐
          </Link>
          <Link href="#" className="menu__item">
            播客
          </Link>
          <Link href="#" className="menu__item">
            视频
          </Link>
          <Link href="#" className="menu__item">
            关注
          </Link>
          <Link href="#" className="menu__item">
            直播
          </Link>
          <Link href="#" className="menu__item">
            私人FM
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

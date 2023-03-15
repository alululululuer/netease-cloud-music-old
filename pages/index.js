import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  router.replace("/find-music");
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
export default Home;

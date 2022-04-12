import BrutList from "../components/brut-list";

function Talks({ talks }: { talks: string[] }) {
  return (
    <div className="border-8 border-black my-4">
      <h1 className="text-6xl font-bold uppercase  text-center ">My Talks</h1>
      <div className="font-mono border-8 border-black m-2">
        <BrutList items={talks}></BrutList>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      talks: [
        "2022-04-04 | 4Developers | Single Page Applications - was it a good idea? ",
        "2022-04-01 | WDI | Build your own framework",
        "PyKonik",
        "dev.js meetup",
        "meet.js",
        "dev.js summit",
        "dev.js summit",
        "JS Poland",
      ],
    },
  };
}

export default Talks;

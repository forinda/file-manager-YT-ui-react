import HomeFolderCard from "../components/HomeFolderCard";

export default function Homepage() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit_,_minmax(150px,1fr))] w-full p-2 gap-2">
      {Array.from({ length: 20 }).map((_f, i) => {
        return <HomeFolderCard id={i} key={i} />;
      })}
    </div>
  );
}

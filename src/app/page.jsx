import User_Detail from "@/components/User_Detail";

export default function Home() {
  return (
    <>
      <h1 className="text-xl sm:text-2xl text-center font-serif font-semibold mt-2">
        Random Name
      </h1>
      <div className="border border-blue-600 mt-5 rounded-2xl h-fit p-5">
        <User_Detail />
      </div>
    </>
  );
}

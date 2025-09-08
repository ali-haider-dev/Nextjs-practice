import { User, Users, Star, TrendingUp } from "lucide-react";
import { Suspense } from "react";
import Loading from "../loading";
import DataCard from "./DataCard";

const DataFetchServer = async ({ searchParams }) => {
  const { name } = await searchParams;
  const res = await fetch(
    `https://api.genderize.io/?name=${encodeURIComponent(name)}`
  );
  const userData = await res.json();
  console.log(userData);

  const isMale = userData.gender === "male";
  const confidencePercentage = userData.probability * 100;

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  return (
    <Suspense fallback={<Loading />}>
      <DataCard name={name} />
    </Suspense>
  );
};

export default DataFetchServer;

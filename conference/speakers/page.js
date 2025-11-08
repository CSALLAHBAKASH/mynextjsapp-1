import next from "next";
import Link from "next/link";
import { cache } from "react";

async function fetchSpeakers() {
  const response = await fetch(`https://randomuser.me/api/`, {
    // next: { revalidate: 10 },
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

export default async function Page() {
  const data = await fetchSpeakers();

  return (
    <>
      <div>conference/speakers Page</div>
      <h1>
        <Link href="/conference">Back to conference</Link>
      </h1>
      <p>Fetched at: {new Date().toLocaleString()}</p>
      {data?.results?.map((person) => (
        <div key={person.login?.uuid}>
          <h2>
            {person.name?.first} {person.name?.last}
          </h2>
          <p>
            {person.email} - {person.location?.country}
          </p>
        </div>
      ))}
    </>
  );
}

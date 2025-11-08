import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>conference/sessions Page</div>
      <h1>
        <Link href="/conference">Back to conference</Link>
      </h1>
    </>
  );
}

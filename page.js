import Link from "next/link";
import Image from "next/image";
import image from "../images/image-bg.png";

export default function HomePage() {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <div>
        <Image
          src={image}
          alt="Sample Image"
          // width={600}
          // height={400}
          // quality={100}
          placeholder="blur"
          sizes={"100vw"}
          // fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1> heading one testing </h1>
      <Link href="/home">Home</Link>
      <br />
    </>
  );
}

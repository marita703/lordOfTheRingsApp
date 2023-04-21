import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheFellowshipOfTheRing() {
  const volume = volumes.find(
    (volumeToFind) => volumeToFind.slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <div>
        <Link href="/">All Volumes</Link>
        <h1>{volume.title}</h1>
        <p>{volume.description}</p>
        <ul>
          {volume.books.map((book) => (
            <li key={book.slug}>
              {book.ordinal}-{book.title}
            </li>
          ))}
        </ul>
        <Image src={volume.cover} alt="image" height={230} width={140} />
        {""}
        <Link href="/volumes/the-two-towers">Next Volume</Link>
      </div>
    </>
  );
}

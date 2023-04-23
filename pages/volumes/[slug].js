import { volumes } from "../../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Volume() {
  const router = useRouter();
  const { slug } = router.query;
  const volume = volumes.find((volumeToFind) => volumeToFind.slug === slug);
  const volumeIndex = volumes.findIndex(
    (volumeToFind) => volumeToFind.slug === slug
  );
  const nextVolumeIndex =
    volumeIndex < volumes.length - 1 ? volumeIndex + 1 : 0;
  console.log("volumes.length -1", volumes.length - 1);

  if (!volume) {
    return null;
  }

  const { title, description, books, cover } = volume;
  return (
    <>
      <div>
        <Link href="/">All Volumes</Link>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {books.map((book, id) => (
            <li key={id}>
              {book.ordinal}-{book.title}
            </li>
          ))}
        </ul>
        <Image src={cover} alt="image" height={230} width={140} />

        <Link href={`/volumes/${volumes[nextVolumeIndex].slug}`}>
          Next Volume : {volumes[nextVolumeIndex].title}
        </Link>
      </div>
    </>
  );
}

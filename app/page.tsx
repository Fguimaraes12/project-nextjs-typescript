import Link from "next/link";

export default function Home() {

  return (
    <div>
      Home
      <br />
      <br />
     <Link href="/dashboard">ir para Dashboard</Link> <br />
     <Link href="/blog">Ir para Blog</Link> <br />
     <Link href="/dashboard/settings">Ir para Settings</Link>
    </div>
  );
}

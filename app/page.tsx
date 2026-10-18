import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Home Pages</h1>
    <br />
    <Link href="/post">Navigate to Post Pages</Link>
  {/* cara penggunaan link itu bisa harus menggunakan dependecy dari Next nya lalu di balut menggunakan tag kosong, bisa juga
  menggunakan tag div atau tag section */}
    </>
  );
}

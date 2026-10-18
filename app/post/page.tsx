/* pada kondisi seperti untuk navigasi nya bisa kita buat seperti ini */
import Link from "next/link"; // pendefenisian agar sistem tau kalau ini adalah ngelink ke halaman lain yang sifat
import ViewUserButton from "../components/Post/ViewUserButton"; // ini adalah import tombol view user button (client side) untuk di jalan kan di server side
import CardList from "../components/Post/CardList"; // pendefenisian file card list untuk di gunakan oleh post pages
export const instant = false;

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

// interface untuk data api nya
interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = async () => {
  const response = await fetch(baseUrl); // ini untuk ngambil response dari api nya
  const posts: Iposts[] = await response.json(); // lalu gunakan response itu dalam bentuk json dengan mengikuti interface Iposts
  return (
    <div>
      <h1>Post Pages</h1>
      <div className="bg-">
        <div className="mb-2 tect-white">
          <p>
            ini adalah contoh halaman server side yang di mempunyai components
            client side yaitu tombol di bawah ini.
            <br /> terus apa bedanya antara server side rendering dan client
            side rendering? nah perbedaan itu pada bagian ngeload browser nya
            jadi jika <br />
            sebuah halaman itu tidak ada aktivitas user itu gunakan ssr dan kalo
            ada activitas user itu gunakan csr begitu.
          </p>
        </div>
        <div className="mb-2">
          <p>
            lalu ada yang namanya card list/ master layout dari satu modul
            contoh disini ada card list <br /> dimana card list ini befungsi
            untuk menampung children isi yang ada di post/pages ini. jadi work
            flow nya adalah ketika di post pages ini ada isi <br />
            lalu masukkan ke components cardlist setelah itu isi dari pages post
            ini akan masuk ke dalam children yang ada di card list. <br />{" "}
            dimana card list itu bisa server side bisa client side tergantung
            pemakaian saja. saya buat nya itu seperti ini
          </p>
          <ul className="text-left">
            <li>1. pages post itu berisi data atau tulisan atau apapun itu </li>
            <li>
              2. pages pose terhubung ke card list dan mengisi children yang ada
              di card list{" "}
            </li>
            <li>3. card list menampilkan isi dari pages post tadi </li>
            <li>
              4. (opsional) di card list bisa kita hubungkan juga ke components
              yang sifat nya client side seperti di project ini{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-2 bg-dark">
        {posts.map((post) => {
          return (
            <CardList key={post.id}>
              {/* contoh safety type */}
              <div className="mb-2">
                <h1 className="text-start">Contoh Fetching data</h1>
                <div>
                  <p className="text-start">{post.id}</p>
                  <p className="text-start">{post.title}</p>
                  <p className="text-start">{post.body}</p>
                  <ViewUserButton userId={post.userId} />
                </div>
              </div>
            </CardList>
          );
        })}
        {/* wraping card list */}
      </div>
      <div className="text-end">
        <Link className="btn btn-danger mt-2" href="/">
          Return to Home Pages
        </Link>
      </div>
    </div>
  );
};

export default Post;

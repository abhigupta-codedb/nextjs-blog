import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export default function CoffeeStore() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.id}</title>
      </Head>

      <main>
        <div>Page is {router.query.id}</div>
        <br />
        <div>
          <Link href="/">Back to home</Link>
        </div>
      </main>
    </div>
  );
}

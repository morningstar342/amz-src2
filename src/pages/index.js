import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Abnili Store</title>
      </Head>

      <Header></Header>
      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner></Banner>

        {/* Product Feed */}
        <ProductFeed products={products}></ProductFeed>
      </main>
    </div>
  );
}

// tells next.js its no longer static page,
// it needs has that middle server, calculate something 1st, render it on the page,
// then deliver it

/*
..... next step fetch database to get your own data of products .....
                mongodb database
 */
export async function getServerSideProps(context){
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
    );

    return {
      props: {
        products,
      }
    }
}
// GET >>> http://fakestoreapi.com/products
// Destructuring props => {products}


import { ReactNode } from "react"
import { CategoryInterface } from "../../interfaces/category.interface";
import Head from 'next/head';
import Header from "../Header";
import Footer from "../Footer";
import { useRouter } from "next/dist/client/router";

interface LayoutProps {
  category: Array<CategoryInterface>;
  children: ReactNode;
  pageTitle: string;
}

const Layout = (props: LayoutProps) => {
  const router = useRouter();
  const { children, pageTitle, category } = props;

  return (
    <>
      <Head>
        <title>{pageTitle} | KTGroup</title>
        <meta name="description" content="Kato Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="new-arrival pt-110 ">
        <div className="container">
          <div className="section-title text-center">
            <h2>DAFTAR MENU</h2>
          </div>
          <div className="arrival-menu text-center pt-20">
            <button className="abtn" data-filter="*" onClick={() => router.push('/')}>
              Semua
            </button>
            {category.map(cat => {
              return (
                <button key={cat.id} className="abtn" data-filter={cat.name} onClick={() => router.push(`/${cat.path}`)}>
                  {cat.name}
                </button>
              )
            })}
          </div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout

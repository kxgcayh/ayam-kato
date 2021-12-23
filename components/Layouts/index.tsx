import { ReactNode } from "react"
import { CategoryInterface } from "../../interfaces/category.interface";
import Head from 'next/head';
import Header from "../Header";
import Footer from "../Footer";
import { useRouter } from "next/dist/client/router";
import Script from 'next/script';

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
      <div id="scrollToTop" className="scrollTop" >
        <i className="las la-arrow-up"></i>
      </div>
      <Header />
      <div className="new-arrival pt-110 ">
        <div className="container">
          <div className="section-title text-center" style={{ marginTop: 10 }}>
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
      {/* <Script strategy="beforeInteractive" src="js/vendor/jquery.min.js" defer />
      <Script strategy="beforeInteractive" src="js/vendor/modernizr-3.11.2.min.js" defer />
      <Script strategy="beforeInteractive" src="js/vendor/bootstrap.min.js" defer />
      <Script strategy="beforeInteractive" src="js/vendor/popper.min.js" defer />
      <Script strategy="beforeInteractive" src="js/vendor/jquery-mean-menu.min.js" defer />
      <Script strategy="beforeInteractive" src="js/vendor/owl.carousel.min.js" defer />
      <Script strategy="beforeInteractive" src="js/vendor/slick.min.js" defer />
      <Script strategy="beforeInteractive" src="js/vendor/jquery.magnific-popup.min.js" defer />
      <Script strategy="beforeInteractive" src="js/vendor/isotope.min.js" defer />
      <Script strategy="beforeInteractive" src="js/vendor/jquery.nice-number.js" defer />
      <Script strategy="beforeInteractive" src="js/countdown.js" defer />
      <Script strategy="beforeInteractive" src="js/scripts.js" defer /> */}
    </>
  )
}

export default Layout

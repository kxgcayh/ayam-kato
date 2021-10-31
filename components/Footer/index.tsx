import Image from "next/dist/client/image"

function Footer() {
  return (
    <footer className="footer-area ">
      <div className="container">
        <div className="footer-menu pt-120">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget mb-30 mb-lg-0 pt-15">
                <div className="logo pb-30">
                  <Image src='/img/kato-logo.png' alt='logo' width={200} height={80} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom mt-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 order-md-2 order-lg-1">
              <div className="copyright mt-15">
                <p>Copyright © 2021 | Developed by <a href="https://github.com/kxgcayh"
                  target="_blank" rel="noreferrer">Kautsar Al Bana</a></p>
              </div>

            </div>
            <div className="col-xl-5 col-lg-3 col-md-12 order-md-1 order-lg-2">
              <ul className="social-icon text-center mt-15">
                <li><a href="https://www.instagram.com/great.katogroup/"><i className="lab la-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

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
                <div className="footer-info">
                  <ul>
                    <li>Email: <span className="ml-5">aruk@gmail.com</span></li>
                    <li>Phone: <span className="ml-5">+948 256 347 968</span></li>
                  </ul>
                  <p className="pr-65">Subscribe to our newsleter and stay
                    up to date with latest offers and
                    upcoming trends.</p>
                  <div className="footer-input position-relative mt-30">
                    <input type="email" placeholder="Email" />
                    <button><i className="fas fa-arrow-right"></i></button>
                  </div>
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
                <p>Copyright © 2020 | Designed by <a href="https://themeforest.net/user/wpsmasher"
                  target="_blank" rel="noreferrer">Wpsmasher</a></p>
              </div>

            </div>
            <div className="col-xl-5 col-lg-3 col-md-12 order-md-1 order-lg-2">
              <ul className="social-icon text-center mt-15">
                <li><a href=""><i className="lab la-facebook-f"></i></a></li>
                <li><a href=""><i className="lab la-twitter"></i></a></li>
                <li><a href=""><i className="lab la-instagram"></i></a></li>
                <li><a href=""><i className="lab la-vimeo"></i></a></li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 order-md-2 order-lg-3">
              <div className="policy  text-right mt-15">
                <a className="position-relative" href="#">Terms of Use </a>
                <a className="ml-40" href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

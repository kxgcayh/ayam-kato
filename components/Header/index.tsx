import Image from 'next/image';

function Header() {
  return (
    <header>
      <div className="header-1 pt-35 ">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-7 order-md-2 order-lg-1">
              <div className="logo text-md-center text-lg-left">
                <a href="#">
                  <Image src='/img/kato-logo.png' alt='logo' width={200} height={80} />
                </a>
              </div>
            </div>
          </div>
          <div className="mobile-menu"></div>
        </div>
      </div>
    </header>
  )
}

export default Header

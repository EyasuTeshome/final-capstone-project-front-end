import React from 'react';

function NavFooter() {
  return (
    <div className="NavFooter">
      <footer className="text-center text-white">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-twitter" />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-facebook-f" />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >

              <i className="fa fa-google-plus" />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-vimeo" />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-pinterest" />
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-github" />
            </a>
          </section>
        </div>

        <div className="text-center text-dark pb-3">
          © 2023
          <br />
          Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">TESLA</a>
        </div>

      </footer>
    </div>
  );
}

export default NavFooter;

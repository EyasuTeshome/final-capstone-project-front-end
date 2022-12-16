

import 'react-multi-carousel/lib/styles.css';

const Latest = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="latest">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h1>Latest</h1>
              <hr />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. my text.
              </p>
              <Carousel responsive={responsive} infinite className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={img1} alt="car" />
                  <h5>Car 1</h5>
                </div>
                <div className="item">
                  <img src={img2} alt="car" />
                  <h5>Car2</h5>
                </div>
                <div className="item">
                  <img src={img3} alt="car" />
                  <h5>Car3</h5>
                </div>
                <div className="item">
                  <img src={img4} alt="car" />
                  <h5>car</h5>
                </div>
                <div className="item">
                  <img src={img1} alt="car" />
                  <h5>car</h5>
                </div>
                <div className="item">
                  <img src={img6} alt="car" />
                  <h5>car</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;

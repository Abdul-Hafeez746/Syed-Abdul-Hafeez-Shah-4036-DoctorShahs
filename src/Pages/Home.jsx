import React from 'react'

function Home() {
  return (
    <>
    <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" className="d-block w-100" alt="Sunset Over the City" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100" alt="Canyon at Nigh" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100" alt="Cliff Above a Stormy Sea" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
        <div className="d-flex justify-content-center mb-4">
          <button className="carousel-control-prev position-relative" type="button" data-mdb-target="#carouselMultiItemExample" data-mdb-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next position-relative" type="button" data-mdb-target="#carouselMultiItemExample" data-mdb-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="carousel-inner py-4">
          {/* Single item */}
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp" className="card-img-top" alt="Waterfall" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" className="card-img-top" alt="Sunset Over the Sea" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp" className="card-img-top" alt="Sunset over the Sea" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" className="card-img-top" alt="Fissure in Sandstone" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp" className="card-img-top" alt="Storm Clouds" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp" className="card-img-top" alt="Hot Air Balloons" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp" className="card-img-top" alt="Peaks Against the Starry Sky" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp" className="card-img-top" alt="Bridge Over Water" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp" className="card-img-top" alt="Purbeck Heritage Coast" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home
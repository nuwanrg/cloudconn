/** @format */
import EmailUs from "./emailUs";

function ContactUs() {
  return (
    <div id='contact' className='contact-area'>
      <div className='contact-inner area-padding'>
        <div className='contact-overly' />
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='section-headline text-center'>
                <h2>Contact us</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            {/* Start contact icon column */}
            {/*           <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="contact-icon text-center">
            <div class="single-icon">
              <i class="fa fa-mobile"></i>
              <p>
                Call: +1 5589 55488 55<br>
                <span>Monday-Friday (9am-5pm)</span>
              </p>
            </div>
          </div>
        </div> */}
            {/* Start contact icon column */}
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <div className='contact-icon text-center'>
                <div className='single-icon'>
                  <i className='fa fa-envelope-o' />
                  <p>
                    Email: info@cloudconn.io
                    <br />
                    <span />
                  </p>
                </div>
              </div>
            </div>
            {/* Start contact icon column */}
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <div className='contact-icon text-center'>
                <div className='single-icon'>
                  <i className='fa fa-map-marker' />
                  <p>
                    Location: 14 Sir Baron Jayatilaka Mawatha, <br />
                    <span>Colombo, Sri Lanka</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            {/* Start Google Map */}
            <div className='col-sm-12 col-md-6 col-lg-6'>
              {/* Start Map */}
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1931.2817809406433!2d79.84395750820987!3d6.936558736380102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596999828a29%3A0xe3d1646a90c5915f!2sHatch%20Works!5e0!3m2!1sen!2slk!4v1603255661929!5m2!1sen!2slk'
                width={500}
                height={500}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden='false'
                tabIndex={0}
              />
              {/* End Map */}
            </div>
            {/* End Google Map */}
            {/* Start  contact */}
            <div className='col-sm-12 col-md-6 col-lg-6'>
              <EmailUs />
            </div>
          </div>
          {/* End Left contact */}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

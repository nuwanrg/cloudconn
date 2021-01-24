/** @format */

import React from "react";
import ContactUs from "./services/contactUs";

function LandingPageComponent() {
  return (
    <div>
      {/* header end */}
      {/* Start Slider Area */}
      <div id='home'>
        <div className='bend niceties preview-2'>
          <div id='ensign-nivoslider' className='slides'>
            <img
              src='img/slider/slider1.jpg'
              alt=''
              title='#slider-direction-1'
            />
            {/* <img
              src='img/slider/slider2.jpg'
              alt=''
              title='#slider-direction-2'
            />
            <img
              src='img/slider/slider3.jpg'
              alt=''
              title='#slider-direction-3'
            /> */}
          </div>
          {/* direction 1 */}
          <div id='slider-direction-1' className='slider-direction slider-one'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                  <div className='slider-content'>
                    {/* layer 1 */}
                    <div
                      className='layer-1-1 hidden-xs wow slideInDown'
                      data-wow-duration='2s'
                      data-wow-delay='.2s'>
                      <h2 className='title1'>With Agile Practices</h2>
                    </div>
                    {/* layer 2 */}
                    <div
                      className='layer-1-2 wow slideInUp'
                      data-wow-duration='2s'
                      data-wow-delay='.1s'>
                      <h1 className='title2'>
                        We're in the business of helping you with the technology
                      </h1>
                    </div>
                    {/* layer 3 */}
                    <div
                      className='layer-1-3 hidden-xs wow slideInUp'
                      data-wow-duration='2s'
                      data-wow-delay='.2s'>
                      {/* <a class="ready-btn right-btn page-scroll" href="#services">See Services</a>
                          <a class="ready-btn page-scroll" href="#about">Learn More</a>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* direction 2 */}
          <div id='slider-direction-2' className='slider-direction slider-two'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                  <div className='slider-content text-center'>
                    {/* layer 1 */}
                    <div
                      className='layer-1-1 hidden-xs wow slideInUp'
                      data-wow-duration='2s'
                      data-wow-delay='.2s'>
                      <h2 className='title1'>
                        Cloud Native Solutions with Cutting Edge Technologies
                      </h2>
                    </div>
                    {/* layer 2 */}
                    <div
                      className='layer-1-2 wow slideInUp'
                      data-wow-duration='2s'
                      data-wow-delay='.1s'>
                      <h1 className='title2'>
                        We make sure realiable and scalable solutions for your
                        future growth
                      </h1>
                    </div>
                    {/* layer 3 */}
                    <div
                      className='layer-1-3 hidden-xs wow slideInUp'
                      data-wow-duration='2s'
                      data-wow-delay='.2s'>
                      {/*<a class="ready-btn right-btn page-scroll" href="#services">See Services</a>
                <a class="ready-btn page-scroll" href="#about">Learn More</a>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* direction 3 */}
          <div id='slider-direction-3' className='slider-direction slider-two'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                  <div className='slider-content'>
                    {/* layer 1 */}
                    <div
                      className='layer-1-1 hidden-xs wow slideInUp'
                      data-wow-duration='2s'
                      data-wow-delay='.2s'>
                      <h2 className='title1'>
                        Containerized Microservices Architecture with CI/CD
                        Automation
                      </h2>
                    </div>
                    {/* layer 2 */}
                    <div
                      className='layer-1-2 wow slideInUp'
                      data-wow-duration='2s'
                      data-wow-delay='.1s'>
                      <h1 className='title2' />
                    </div>
                    {/* layer 3 */}
                    <div
                      className='layer-1-3 hidden-xs wow slideInUp'
                      data-wow-duration='2s'
                      data-wow-delay='.2s'>
                      {/*<a class="ready-btn right-btn page-scroll" href="#services">See Services</a>
                <a class="ready-btn page-scroll" href="#about">Learn More</a>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Slider Area */}
      {/* Start About area */}
      <div id='about' className='about-area area-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='section-headline text-center'>
                <h2>About Us</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            {/* single-well start*/}
            {/* <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="well-left">
                  <div class="single-well">
                    <a href="#">
                        <img src="img/about/1.jpg" alt="">
                      </a>
                  </div>
                </div>
              </div>*/}
            {/* single-well end*/}
            {/*div class="col-md-6 col-sm-6 col-xs-12"*/}
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='well-middle'>
                <div className='single-well'>
                  {/*<a href="#">
              <h4 class="sec-head">project Maintenance</h4>
             </a>*/}
                  <p>
                    We are experts in executing complete software development
                    lifecycles using cutting edge technologies and best Agile
                    practices to leverage business ideas with technology. We
                    love to use technology to change the world for the better.
                    We listen &amp; learn to understand your today, then bring
                    cutting-edge insights and expertise to design, develop &amp;
                    deliver your best digital future. We are a small software
                    development offshore team operating from Sri Lanka and
                    Singapore with having more than 14 years of experience in
                    the field in various business domains. We believe in Agile
                    software developments in delivering cost-effective solutions
                    in most efficient manner.
                  </p>
                  <ul>
                    <li>
                      <i className='fa fa-check' /> Application developments
                    </li>
                    <li>
                      <i className='fa fa-check' /> IFS Support
                    </li>
                    <li>
                      <i className='fa fa-check' /> WSO2 Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End col*/}
          </div>
        </div>
      </div>
      {/* End About area */}
      {/* Start Service area */}
      <div id='services' className='services-area area-padding'>
        <div className='container'>
          <div className='row' style={{ marginBottom: 30 }}>
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='section-headline services-head text-center'>
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <div className='colomn '>
            <div className='row' style={{ marginBottom: 20 }}>
              <div className='col-md-6 col-sm-6 col-xs-12 '>
                <a className='services-icon' href='#'>
                  <img
                    src='img/services/applicationDev.jpg'
                    title='#applicationDev'
                  />
                </a>
              </div>
              <div className='col-md-6 col-sm-6 col-xs-12'>
                <div className='about-move'>
                  <div className='single-services'>
                    <h2 className='services-topic'>Application developments</h2>
                    <p className='paragraph'>
                      Build, run, and operate cloud-native apps with us. Embrace
                      modern approaches like serverless, microservices, and
                      containers. Quickly code, build, deploy, and manage
                      without compromising security or quality. We accelerate
                      engineering productivity and simplify operations with
                      automated end-to-end tooling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row' style={{ marginBottom: 20 }}>
              <div className='col-md-6 col-sm-6 col-xs-12 '>
                <div className='single-services'>
                  <h2 className='services-topic'>IFS Services</h2>
                  <p className='paragraph'>
                    At Cloudconn we want your business to focus on doing what it
                    does best, so with our Services we make sure you don’t have
                    to worry about managing your IFS Apps environments. You will
                    benefit from having the full support and expertise from our
                    consultants who take care of the technical management, and
                    in cooperation with our partners we can offer you a fully
                    hosted environment. Whether in a private or public cloud, we
                    always look for a suitable solution that matches your
                    specific needs. With Cloud managed Services we take care of
                    any incidents or IFS change requests. We can empower you
                    with our 24/7 support services from our highly skilled
                    service desk, or via on-site consultancy. Get in touch with
                    one of our experts to explore how we can elevate your
                    business.
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-sm-6 col-xs-12 '>
                <div className='about-move'>
                  <a className='services-icon' href='/ifsservices'>
                    <img
                      src='img/services/ifsServices.jpg'
                      title='#ifsService'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='row' style={{ marginBottom: 20 }}>
              <div className='col-md-6 col-sm-6 col-xs-12 '>
                <a className='services-icon' href='#'>
                  <img src='img/services/wso2.jpg' title='#wso2' />
                </a>
              </div>
              <div className='col-md-6 col-sm-6 col-xs-12 '>
                <div className='about-move'>
                  <div className='single-services'>
                    <h2 className='services-topic'>WSO2 Support</h2>
                    <p className='paragraph'>
                      Integration based on open standards is the ultimate
                      combination, but things can get complex very quickly. Not
                      to worry. We offer support in pretty much every way
                      possible, for as long as you need it. Bulletproof all you
                      want; reality is often much different than your plans. So
                      when you get started with your new integration solution,
                      you will run into some problems eventually. That’s OK.
                      Fire-fighting and troubleshooting are part of the job. But
                      if you don’t have the expertise or time to do it yourself,
                      you have plenty of options. Let’s talk you through the
                      support services we offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service area */}
      {/* our-skill-area start */}
      <div className='our-skill-area fix hidden-sm' hidden>
        <div className='test-overly' />
        <div className='skill-bg area-padding-2'>
          <div className='container'>
            {/* section-heading end */}
            <div className='row'>
              <div className='skill-text'>
                {/* single-skill start */}
                <div className='col-xs-12 col-sm-3 col-md-3 text-center'>
                  <div className='single-skill'>
                    <div className='progress-circular'>
                      <input
                        type='text'
                        className='knob'
                        defaultValue={0}
                        data-rel={95}
                        data-linecap='round'
                        data-width={175}
                        data-bgcolor='#fff'
                        data-fgcolor='#3EC1D5'
                        data-thickness='.20'
                        data-readonly='true'
                        disabled
                      />
                      <h3 className='progress-h4'>Web Design</h3>
                    </div>
                  </div>
                </div>
                {/* single-skill end */}
                {/* single-skill start */}
                <div className='col-xs-12 col-sm-3 col-md-3 text-center'>
                  <div className='single-skill'>
                    <div className='progress-circular'>
                      <input
                        type='text'
                        className='knob'
                        defaultValue={0}
                        data-rel={85}
                        data-linecap='round'
                        data-width={175}
                        data-bgcolor='#fff'
                        data-fgcolor='#3EC1D5'
                        data-thickness='.20'
                        data-readonly='true'
                        disabled
                      />
                      <h3 className='progress-h4'>Graphics Design</h3>
                    </div>
                  </div>
                </div>
                {/* single-skill end */}
                {/* single-skill start */}
                <div className='col-xs-12 col-sm-3 col-md-3 text-center'>
                  <div className='single-skill'>
                    <div className='progress-circular'>
                      <input
                        type='text'
                        className='knob'
                        defaultValue={0}
                        data-rel={75}
                        data-linecap='round'
                        data-width={175}
                        data-bgcolor='#fff'
                        data-fgcolor='#3EC1D5'
                        data-thickness='.20'
                        data-readonly='true'
                        disabled
                      />
                      <h3 className='progress-h4'>Php Developer</h3>
                    </div>
                  </div>
                </div>
                {/* single-skill end */}
                {/* single-skill start */}
                <div className='col-xs-12 col-sm-3 col-md-3 text-center'>
                  <div className='single-skill'>
                    <div className='progress-circular'>
                      <input
                        type='text'
                        className='knob'
                        defaultValue={0}
                        data-rel={65}
                        data-linecap='round'
                        data-width={175}
                        data-bgcolor='#fff'
                        data-fgcolor='#3EC1D5'
                        data-thickness='.20'
                        data-readonly='true'
                        disabled
                      />
                      <h3 className='progress-h4'>Java Script</h3>
                    </div>
                  </div>
                </div>
                {/* single-skill end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our-skill-area end */}
      {/* Faq area start */}
      <div className='faq-area area-padding' hidden>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='section-headline text-center'>
                <h2>Faq Question</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 col-sm-6 col-xs-12'>
              <div className='faq-details'>
                <div className='panel-group' id='accordion'>
                  {/* Panel Default */}
                  <div className='panel panel-default'>
                    <div className='panel-heading'>
                      <h4 className='check-title'>
                        <a
                          data-toggle='collapse'
                          className='active'
                          data-parent='#accordion'
                          href='#check1'>
                          <span className='acc-icons' />
                          Consectetur adipisicing elit.
                        </a>
                      </h4>
                    </div>
                    <div id='check1' className='panel-collapse collapse in'>
                      <div className='panel-body'>
                        <p>
                          Redug Lefes dolor sit amet, consectetur adipisicing
                          elit. Aspernatur, tempore, commodi quas mollitia
                          dolore magnam quidem repellat, culpa voluptates
                          laboriosam maiores alias accusamus recusandae vero
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Panel Default */}
                  {/* Panel Default */}
                  <div className='panel panel-default'>
                    <div className='panel-heading'>
                      <h4 className='check-title'>
                        <a
                          data-toggle='collapse'
                          data-parent='#accordion'
                          href='#check2'>
                          <span className='acc-icons' /> Dolore magnam quidem
                          repellat.
                        </a>
                      </h4>
                    </div>
                    <div id='check2' className='panel-collapse collapse'>
                      <div className='panel-body'>
                        <p>
                          Redug Lefes dolor sit amet, consectetur adipisicing
                          elit. Aspernatur, tempore, commodi quas mollitia
                          dolore magnam quidem repellat, culpa voluptates
                          laboriosam maiores alias accusamus recusandae vero
                          aperiam sint nulla beatae eos.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Panel Default */}
                  {/* Panel Default */}
                  <div className='panel panel-default'>
                    <div className='panel-heading'>
                      <h4 className='check-title'>
                        <a
                          data-toggle='collapse'
                          data-parent='#accordion'
                          href='#check3'>
                          <span className='acc-icons' />
                          Redug Lefes dolor sit.
                        </a>
                      </h4>
                    </div>
                    <div id='check3' className='panel-collapse collapse'>
                      <div className='panel-body'>
                        <p>
                          Redug Lefes dolor sit amet, consectetur adipisicing
                          elit. Aspernatur, tempore, commodi quas mollitia
                          dolore magnam quidem repellat, culpa voluptates
                          laboriosam maiores alias accusamus recusandae vero
                          aperiam sint nulla beatae eos.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Panel Default */}
                  {/* Panel Default */}
                  <div className='panel panel-default'>
                    <div className='panel-heading'>
                      <h4 className='check-title'>
                        <a
                          data-toggle='collapse'
                          data-parent='#accordion'
                          href='#check4'>
                          <span className='acc-icons' />
                          Maiores alias accusamus
                        </a>
                      </h4>
                    </div>
                    <div id='check4' className='panel-collapse collapse'>
                      <div className='panel-body'>
                        <p>
                          Redug Lefes dolor sit amet, consectetur adipisicing
                          elit. Aspernatur, tempore, commodi quas mollitia
                          dolore magnam quidem repellat, culpa voluptates
                          laboriosam maiores alias accusamus recusandae vero
                          aperiam sint nulla beatae eos.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Panel Default */}
                </div>
              </div>
            </div>
            <div className='col-md-6 col-sm-6 col-xs-12'>
              <div className='tab-menu'>
                {/* Nav tabs */}
                <ul className='nav nav-tabs' role='tablist'>
                  <li className='active'>
                    <a href='#p-view-1' role='tab' data-toggle='tab'>
                      Project
                    </a>
                  </li>
                  <li>
                    <a href='#p-view-2' role='tab' data-toggle='tab'>
                      Planning
                    </a>
                  </li>
                  <li>
                    <a href='#p-view-3' role='tab' data-toggle='tab'>
                      Success
                    </a>
                  </li>
                </ul>
              </div>
              <div className='tab-content'>
                <div className='tab-pane active' id='p-view-1'>
                  <div className='tab-inner'>
                    <div className='event-content head-team'>
                      <h4>Project</h4>
                      <p>
                        Redug Lares dolor sit amet, consectetur adipisicing
                        elit. Animi vero excepturi magnam ducimus adipisci
                        voluptas, praesentium maxime necessitatibus in dolor
                        dolores unde ab, libero quo. Aut, laborum sequi.
                      </p>
                      <p>
                        voluptas, praesentium maxime cum fugiat,magnam ducimus
                        adipisci voluptas, praesentium architecto ducimus,
                        doloribus fuga itaque omnis placeat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='tab-pane' id='p-view-2'>
                  <div className='tab-inner'>
                    <div className='event-content head-team'>
                      <h4>Planning</h4>
                      <p>
                        voluptas, praesentium maxime cum fugiat,magnam ducimus
                        adipisci voluptas, praesentium architecto ducimus,
                        doloribus fuga itaque omnis.
                      </p>
                      <p>
                        Redug Lares dolor sit amet, consectetur adipisicing
                        elit. Animi vero excepturi magnam ducimus adipisci
                        voluptas, praesentium maxime necessitatibus in dolor
                        dolores unde ab, libero quo. Aut.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='tab-pane' id='p-view-3'>
                  <div className='tab-inner'>
                    <div className='event-content head-team'>
                      <h4>Success</h4>
                      <p>
                        voluptas, praesentium maxime cum fugiat,magnam ducimus
                        adipisci voluptas, praesentium architecto ducimus,
                        doloribus fuga itaque omnis placeat.
                      </p>
                      <p>
                        voluptas, praesentium maxime cum fugiat,magnam ducimus
                        adipisci voluptas, praesentium architecto ducimus,
                        doloribus fuga itaque omnis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end Row */}
        </div>
      </div>
      {/* End Faq Area */}
      {/* Start Wellcome Area */}
      {/*<div class="wellcome-area" hidden>
                      <div class="well-bg">
                        <div class="test-overly"></div>
                        <div class="container">
                          <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                              <div class="wellcome-text">
                                <div class="well-text text-center">
                                  <h2>Welcome To Our eBusiness</h2>
                                  <p>
                                    Busuness Lorem ipsum dolor sit amet, consectetur adipiscing elit.luctus est eget congue.
                                  </p>
                                  <div class="subs-feilds">
                                    <div class="suscribe-input">
                                      <input type="email" class="email form-control width-80" id="sus_email" placeholder="Email">
                                      <button type="submit" id="sus_submit" class="add-btn width-20">Subscribe</button>
                                      <div id="msg_Submit" class="h3 text-center hidden"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>*/}
      {/* End Wellcome Area */}
      {/* Start team Area */}
      <div id='team' className='our-team-area area-padding' hidden>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='section-headline text-center'>
                <h2>Our special Team</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='team-top'>
              <div className='col-md-3 col-sm-3 col-xs-12'>
                <div className='single-team-member'>
                  <div className='team-img'>
                    <a href='#'>
                      <img src='img/team/1.jpg' alt='' />
                    </a>
                    <div className='team-social-icon text-center'>
                      <ul>
                        <li>
                          <a href='#'>
                            <i className='fa fa-facebook' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-twitter' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-instagram' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='team-content text-center'>
                    <h4>Jhon Mickel</h4>
                    <p>Seo</p>
                  </div>
                </div>
              </div>
              {/* End column */}
              <div className='col-md-3 col-sm-3 col-xs-12'>
                <div className='single-team-member'>
                  <div className='team-img'>
                    <a href='#'>
                      <img src='img/team/2.jpg' alt='' />
                    </a>
                    <div className='team-social-icon text-center'>
                      <ul>
                        <li>
                          <a href='#'>
                            <i className='fa fa-facebook' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-twitter' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-instagram' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='team-content text-center'>
                    <h4>Andrew Arnold</h4>
                    <p>Web Developer</p>
                  </div>
                </div>
              </div>
              {/* End column */}
              <div className='col-md-3 col-sm-3 col-xs-12'>
                <div className='single-team-member'>
                  <div className='team-img'>
                    <a href='#'>
                      <img src='img/team/3.jpg' alt='' />
                    </a>
                    <div className='team-social-icon text-center'>
                      <ul>
                        <li>
                          <a href='#'>
                            <i className='fa fa-facebook' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-twitter' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-instagram' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='team-content text-center'>
                    <h4>Lellien Linda</h4>
                    <p>Web Design</p>
                  </div>
                </div>
              </div>
              {/* End column */}
              <div className='col-md-3 col-sm-3 col-xs-12'>
                <div className='single-team-member'>
                  <div className='team-img'>
                    <a href='#'>
                      <img src='img/team/4.jpg' alt='' />
                    </a>
                    <div className='team-social-icon text-center'>
                      <ul>
                        <li>
                          <a href='#'>
                            <i className='fa fa-facebook' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-twitter' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-instagram' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='team-content text-center'>
                    <h4>Jhon Powel</h4>
                    <p>Seo Expert</p>
                  </div>
                </div>
              </div>
              {/* End column */}
            </div>
          </div>
        </div>
      </div>
      {/* End Team Area */}
      {/* Start reviews Area */}
      <div className='reviews-area hidden-xs'>
        <div className='work-us'>
          <div className='work-left-text'>
            <a href='#'>
              <img src='img/about/2.jpg' alt='' />
            </a>
          </div>
          <div className='work-right-text text-center'>
            <h2>working with us</h2>
            <h5>
              Agile Teams, Cutting Edge Technologies, State-of-the Art Office
            </h5>
            <a href='#contact' className='ready-btn'>
              Contact us
            </a>
          </div>
        </div>
      </div>
      {/* End reviews Area */}
      {/* Start portfolio Area */}
      <div id='portfolio' className='portfolio-area area-padding fix' hidden>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className='section-headline text-center'>
                <h2>Our Portfolio</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            {/* Start Portfolio -page */}
            <div className='awesome-project-1 fix'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <div className='awesome-menu'>
                  <ul className='project-menu'>
                    <li>
                      <a href='#' className='active' data-filter='*'>
                        All
                      </a>
                    </li>
                    <li>
                      <a href='#' data-filter='.development'>
                        Development
                      </a>
                    </li>
                    <li>
                      <a href='#' data-filter='.design'>
                        Design
                      </a>
                    </li>
                    <li>
                      <a href='#' data-filter='.photo'>
                        Photoshop
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='awesome-project-content'>
              {/* single-awesome-project start */}
              <div className='col-md-4 col-sm-4 col-xs-12 design development'>
                <div className='single-awesome-project'>
                  <div className='awesome-img'>
                    <a href='#'>
                      <img src='img/portfolio/1.jpg' alt='' />
                    </a>
                    <div className='add-actions text-center'>
                      <div className='project-dec'>
                        <a
                          className='venobox'
                          data-gall='myGallery'
                          href='img/portfolio/1.jpg'>
                          <h4>Business City</h4>
                          <span>Web Development</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single-awesome-project end */}
              {/* single-awesome-project start */}
              <div className='col-md-4 col-sm-4 col-xs-12 photo'>
                <div className='single-awesome-project'>
                  <div className='awesome-img'>
                    <a href='#'>
                      <img src='img/portfolio/2.jpg' alt='' />
                    </a>
                    <div className='add-actions text-center'>
                      <div className='project-dec'>
                        <a
                          className='venobox'
                          data-gall='myGallery'
                          href='img/portfolio/2.jpg'>
                          <h4>Blue Sea</h4>
                          <span>Photosho</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single-awesome-project end */}
              {/* single-awesome-project start */}
              <div className='col-md-4 col-sm-4 col-xs-12 design'>
                <div className='single-awesome-project'>
                  <div className='awesome-img'>
                    <a href='#'>
                      <img src='img/portfolio/3.jpg' alt='' />
                    </a>
                    <div className='add-actions text-center'>
                      <div className='project-dec'>
                        <a
                          className='venobox'
                          data-gall='myGallery'
                          href='img/portfolio/3.jpg'>
                          <h4>Beautiful Nature</h4>
                          <span>Web Design</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single-awesome-project end */}
              {/* single-awesome-project start */}
              <div className='col-md-4 col-sm-4 col-xs-12 photo development'>
                <div className='single-awesome-project'>
                  <div className='awesome-img'>
                    <a href='#'>
                      <img src='img/portfolio/4.jpg' alt='' />
                    </a>
                    <div className='add-actions text-center'>
                      <div className='project-dec'>
                        <a
                          className='venobox'
                          data-gall='myGallery'
                          href='img/portfolio/4.jpg'>
                          <h4>Creative Team</h4>
                          <span>Web design</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single-awesome-project end */}
              {/* single-awesome-project start */}
              <div className='col-md-4 col-sm-4 col-xs-12 development'>
                <div className='single-awesome-project'>
                  <div className='awesome-img'>
                    <a href='#'>
                      <img src='img/portfolio/5.jpg' alt='' />
                    </a>
                    <div className='add-actions text-center text-center'>
                      <div className='project-dec'>
                        <a
                          className='venobox'
                          data-gall='myGallery'
                          href='img/portfolio/5.jpg'>
                          <h4>Beautiful Flower</h4>
                          <span>Web Development</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single-awesome-project end */}
              {/* single-awesome-project start */}
              <div className='col-md-4 col-sm-4 col-xs-12 design photo'>
                <div className='single-awesome-project'>
                  <div className='awesome-img'>
                    <a href='#'>
                      <img src='img/portfolio/6.jpg' alt='' />
                    </a>
                    <div className='add-actions text-center'>
                      <div className='project-dec'>
                        <a
                          className='venobox'
                          data-gall='myGallery'
                          href='img/portfolio/6.jpg'>
                          <h4>Night Hill</h4>
                          <span>Photoshop</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single-awesome-project end */}
            </div>
          </div>
        </div>
      </div>
      {/* awesome-portfolio end */}
      {/* start pricing area */}
      <div id='pricing' className='pricing-area area-padding' hidden>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='section-headline text-center'>
                <h2>Pricing Table</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <div className='pri_table_list'>
                <h3>
                  basic <br />
                  <span>$80 / month</span>
                </h3>
                <ol>
                  <li className='check'>Online system</li>
                  <li className='check cross'>Full access</li>
                  <li className='check'>Free apps</li>
                  <li className='check'>Multiple slider</li>
                  <li className='check cross'>Free domin</li>
                  <li className='check cross'>Support unlimited</li>
                  <li className='check'>Payment online</li>
                  <li className='check cross'>Cash back</li>
                </ol>
                <button>sign up now</button>
              </div>
            </div>
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <div className='pri_table_list active'>
                <span className='saleon'>top sale</span>
                <h3>
                  standard <br />
                  <span>$110 / month</span>
                </h3>
                <ol>
                  <li className='check'>Online system</li>
                  <li className='check'>Full access</li>
                  <li className='check'>Free apps</li>
                  <li className='check'>Multiple slider</li>
                  <li className='check cross'>Free domin</li>
                  <li className='check'>Support unlimited</li>
                  <li className='check'>Payment online</li>
                  <li className='check cross'>Cash back</li>
                </ol>
                <button>sign up now</button>
              </div>
            </div>
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <div className='pri_table_list'>
                <h3>
                  premium <br />
                  <span>$150 / month</span>
                </h3>
                <ol>
                  <li className='check'>Online system</li>
                  <li className='check'>Full access</li>
                  <li className='check'>Free apps</li>
                  <li className='check'>Multiple slider</li>
                  <li className='check'>Free domin</li>
                  <li className='check'>Support unlimited</li>
                  <li className='check'>Payment online</li>
                  <li className='check'>Cash back</li>
                </ol>
                <button>sign up now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End pricing table area */}
      {/* Start Testimonials */}
      <div className='testimonials-area'>
        <div className='testi-inner area-padding'>
          <div className='testi-overly' />
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 col-sm-12 col-xs-12'>
                {/* Start testimonials Start */}
                <div className='testimonial-content text-center'>
                  <a className='quate' href='#'>
                    <i className='fa fa-quote-right' />
                  </a>
                  {/* start testimonial carousel */}
                  <div className='testimonial-carousel'>
                    <div className='single-testi'>
                      <div className='testi-text'>
                        <p>
                          Cloud-native applications are a collection of small,
                          independent, and loosely coupled services. ... If an
                          app is "cloud-native," it's specifically designed to
                          provide a consistent development and automated
                          management experience across private, public, and
                          hybrid clouds.
                        </p>
                        <h6>AWS</h6>
                      </div>
                    </div>
                    {/* End single item */}
                    <div className='single-testi'>
                      <div className='testi-text'>
                        <p>
                          The microservice architecture enables the rapid,
                          frequent and reliable delivery of large, complex
                          applications. It also enables an organization to
                          evolve its technology stack.
                        </p>
                        {/*<h6>Jhon</h6>*/}
                      </div>
                    </div>
                    {/* End single item */}
                    <div className='single-testi'>
                      <div className='testi-text'>
                        <p>
                          CI/CD is a method to frequently deliver apps to
                          customers by introducing automation into the stages of
                          app development. The main concepts attributed to CI/CD
                          are continuous integration, continuous delivery, and
                          continuous deployment.
                        </p>
                        {/*<h6>Fleming</h6>*/}
                      </div>
                    </div>
                    {/* End single item */}
                  </div>
                </div>
                {/* End testimonials end */}
              </div>
              {/* End Right Feature */}
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonials */}
      {/* Start Blog Area */}
      <div id='blog' className='blog-area' hidden>
        <div className='blog-inner area-padding'>
          <div className='blog-overly' />
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 col-sm-12 col-xs-12'>
                <div className='section-headline text-center'>
                  <h2>Latest News</h2>
                </div>
              </div>
            </div>
            <div className='row'>
              {/* Start Left Blog */}
              <div className='col-md-4 col-sm-4 col-xs-12'>
                <div className='single-blog'>
                  <div className='single-blog-img'>
                    <a href='blog.html'>
                      <img src='img/blog/1.jpg' alt='' />
                    </a>
                  </div>
                  <div className='blog-meta'>
                    <span className='comments-type'>
                      <i className='fa fa-comment-o' />
                      <a href='#'>13 comments</a>
                    </span>
                    <span className='date-type'>
                      <i className='fa fa-calendar' />
                      2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className='blog-text'>
                    <h4>
                      <a href='blog.html'>Assumenda repud eum veniam</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet conse adipis elit Assumenda
                      repud eum veniam optio modi sit explicabo nisi magnam
                      quibusdam.sit amet conse adipis elit Assumenda repud eum
                      veniam optio modi sit explicabo nisi magnam quibusdam.
                    </p>
                  </div>
                  <span>
                    <a href='blog.html' className='ready-btn'>
                      Read more
                    </a>
                  </span>
                </div>
                {/* Start single blog */}
              </div>
              {/* End Left Blog*/}
              {/* Start Left Blog */}
              <div className='col-md-4 col-sm-4 col-xs-12'>
                <div className='single-blog'>
                  <div className='single-blog-img'>
                    <a href='blog.html'>
                      <img src='img/blog/2.jpg' alt='' />
                    </a>
                  </div>
                  <div className='blog-meta'>
                    <span className='comments-type'>
                      <i className='fa fa-comment-o' />
                      <a href='#'>130 comments</a>
                    </span>
                    <span className='date-type'>
                      <i className='fa fa-calendar' />
                      2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className='blog-text'>
                    <h4>
                      <a href='blog.html'>Explicabo magnam quibusdam.</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet conse adipis elit Assumenda
                      repud eum veniam optio modi sit explicabo nisi magnam
                      quibusdam.sit amet conse adipis elit Assumenda repud eum
                      veniam optio modi sit explicabo nisi magnam quibusdam.
                    </p>
                  </div>
                  <span>
                    <a href='blog.html' className='ready-btn'>
                      Read more
                    </a>
                  </span>
                </div>
                {/* Start single blog */}
              </div>
              {/* End Left Blog*/}
              {/* Start Right Blog*/}
              <div className='col-md-4 col-sm-4 col-xs-12'>
                <div className='single-blog'>
                  <div className='single-blog-img'>
                    <a href='blog.html'>
                      <img src='img/blog/3.jpg' alt='' />
                    </a>
                  </div>
                  <div className='blog-meta'>
                    <span className='comments-type'>
                      <i className='fa fa-comment-o' />
                      <a href='#'>10 comments</a>
                    </span>
                    <span className='date-type'>
                      <i className='fa fa-calendar' />
                      2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className='blog-text'>
                    <h4>
                      <a href='blog.html'>Lorem ipsum dolor sit amet</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet conse adipis elit Assumenda
                      repud eum veniam optio modi sit explicabo nisi magnam
                      quibusdam.sit amet conse adipis elit Assumenda repud eum
                      veniam optio modi sit explicabo nisi magnam quibusdam.
                    </p>
                  </div>
                  <span>
                    <a href='blog.html' className='ready-btn'>
                      Read more
                    </a>
                  </span>
                </div>
              </div>
              {/* End Right Blog*/}
            </div>
          </div>
        </div>
      </div>
      {/* End Blog */}
      {/* Start Suscrive Area */}
      <div className='suscribe-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs=12'>
              <div className='suscribe-text text-center'>
                <h3>Welcome to CloudConn</h3>
                {/*<a class="sus-btn" href="#">Get A quate</a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Suscrive Area */}
      {/* Start contact Area */}
      <ContactUs />
      {/* End Contact Area */}
      {/* Start router components */}
      {/* Start Footer bottom Area */}
    </div>
  );
}

export default LandingPageComponent;

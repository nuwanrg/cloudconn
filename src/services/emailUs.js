/** @format */
import React, { Component } from "react";
import * as emailjs from "emailjs-com";

const required = (value) => {
  if (!value) {
    return <div className='form-group'>'Please write something for us'</div>;
  }
};

class EmailUs extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: "<isharanandun35@gmail.com>",
      subject: subject,
      message_html: message,
    };

    /*https://www.emailjs.com/ create account  */
    emailjs.send(
      "service_linxr6j",
      "template_xcjseeu", //https://dashboard.emailjs.com/admin/templates
      templateParams,
      "user_0Ylz3clKCCPNJahQkRZ63"
    );
    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.subject);
    console.log(this.state.message);
    //console.log(emailjs);

    return (
      <div className='form contact-form'>
        <div id='sendmessage'>Your message has been sent. Thank you!</div>
        <div id='errormessage' />
        <form
          // action='mail.php'
          // method='post'
          // role='form'
          className='contactForm'
          onSubmit={this.handleSubmit.bind(this)}>
          <div className='form-group'>
            <input
              type='text'
              name='name'
              className='form-control'
              id='name'
              placeholder='Your Name'
              data-rule='minlen:1'
              value={this.state.name}
              onChange={this.handleChange.bind(this, "name")}
              data-msg='Please enter the name'
            />
            <div className='validation' />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              name='email'
              id='email'
              placeholder='Your Email'
              data-rule='email'
              value={this.state.email}
              onChange={this.handleChange.bind(this, "email")}
              data-msg='Please enter a valid email'
            />
            <div className='validation' />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='subject'
              id='subject'
              placeholder='Subject'
              data-rule='required'
              value={this.state.subject}
              onChange={this.handleChange.bind(this, "subject")}
              data-msg='Please enter the subject '
            />
            <div className='validation' />
          </div>
          <div className='form-group'>
            <textarea
              className='form-control'
              name='message'
              rows={5}
              data-rule='required'
              data-msg='Please enter the message'
              placeholder='Message'
              defaultValue={""}
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
            />
            <div className='validation' />
          </div>
          <div className='text-center'>
            <button type='submit'>Send Message</button>
          </div>
        </form>
      </div>
    );
  }
}
export default EmailUs;

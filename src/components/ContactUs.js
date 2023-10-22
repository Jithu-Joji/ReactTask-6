import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    const { resumeData } = this.props;

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eight columns footer-widgets">
            <div className="widget">
              <h4>LinkedIn : {resumeData.linkedinId}</h4>
              <h4>Mail : {resumeData.mailId}</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

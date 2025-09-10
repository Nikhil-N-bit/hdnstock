import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#fbfbfb' }}>
      <div className="container">
        <div className="row">

          {/* Column 1: Logo and Copyright */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <a href="javascript:void(0)" className="d-flex align-items-center mb-3 text-decoration-none">
              <img src="media/images/hdnlogo.png" alt="Hdnstock Logo" style={{ height: '20px' }} />
            </a>
            <p className="text-muted">© 2010 - 2025, Hdnstock Broking Ltd. <br /> All rights reserved.</p>
            <div className="d-flex gap-3 fs-5 mt-4 text-muted">
              <a href="javascript:void(0)" className="text-decoration-none text-muted"><FaTwitter /></a>
              <a href="javascript:void(0)" className="text-decoration-none text-muted"><FaFacebook /></a>
              <a href="javascript:void(0)" className="text-decoration-none text-muted"><FaInstagram /></a>
              <a href="javascript:void(0)" className="text-decoration-none text-muted"><FaLinkedin /></a>
            </div>
            <div className="d-flex gap-3 fs-5 mt-3 text-muted">
              <a href="javascript:void(0)" className="text-decoration-none text-muted"><FaYoutube /></a>
              <a href="javascript:void(0)" className="text-decoration-none text-muted"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Column 2: Account Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="mb-3 fw-bold">Account</h5>
            <ul className="list-unstyled">
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Open demat account</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Minor demat account</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">NRI demat account</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Commodity</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Dematerialisation</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Fund transfer</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">MTF</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Referral program</a></li>
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="mb-3 fw-bold">Support</h5>
            <ul className="list-unstyled">
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Contact us</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Support portal</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">How to file a complaint?</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Status of your complaints</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Bulletin</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Circular</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Z-Connect blog</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Downloads</a></li>
            </ul>
          </div>

          {/* Column 4: Company Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="mb-3 fw-bold">Company</h5>
            <ul className="list-unstyled">
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">About</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Philosophy</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Press & media</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Careers</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Hdnstock Cares (CSR)</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Hdnstock.tech</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Open source</a></li>
            </ul>
          </div>

          {/* Column 5: Quick links */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="mb-3 fw-bold">Quick links</h5>
            <ul className="list-unstyled">
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Upcoming IPOs</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Brokerage charges</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Market holidays</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Economic calendar</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Calculators</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Markets</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-muted">Sectors</a></li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
            <div className="col-12">
                <hr className="text-muted" />
                <p className="text-muted small">
                    Hdnstock Broking Ltd. Member of NSE, BSE & MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Hdnstock Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Hdnstock Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Hdnstock Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="javascript:void(0)" className="text-decoration-none text-info">complaints@hdnstock.com</a>, for DP related to <a href="javascript:void(0)" className="text-decoration-none text-info">dp@hdnstock.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                </p>
                <p className="text-muted small">
                    Procedure to file a complaint on <a href="javascript:void(0)" className="text-decoration-none text-info">SEBI SCORES</a>. Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                </p>
                <p className="text-muted small">
                    <a href="javascript:void(0)" className="text-decoration-none text-info">Smart Online Dispute Resolution</a> | <a href="javascript:void(0)" className="text-decoration-none text-info">Grievances Redressal Mechanism</a>
                </p>
                <p className="text-muted small">
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                </p>
                <p className="text-muted small">
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                </p>
                <p className="text-muted small">
                    India's largest broker based on networth as per <a href="javascript:void(0)" className="text-decoration-none text-info">NSE</a>. <a href="javascript:void(0)" className="text-decoration-none text-info">NSE broker factsheet</a>
                </p>
                <p className="text-muted small">
                    *Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary."Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Hdnstock and offering such services, please <a href="javascript:void(0)" className="text-decoration-none text-info">create a ticket here</a>.
                </p>
                <div className="d-flex justify-content-center gap-4 mt-4">
                  <a href="javascript:void(0)" className="text-decoration-none text-muted">NSE</a>
                  <a href="javascript:void(0)" className="text-decoration-none text-muted">BSE</a>
                  <a href="javascript:void(0)" className="text-decoration-none text-muted">MCX</a>
                  <a href="javascript:void(0)" className="text-decoration-none text-muted">Terms & conditions</a>
                  <a href="javascript:void(0)" className="text-decoration-none text-muted">Policies & procedures</a>
                  <a href="javascript:void(0)" className="text-decoration-none text-muted">Privacy policy</a>
                  <a href="javascript:void(0)" className="text-decoration-none text-muted">Disclosure</a>
                  <a href="javascript:void(0)" className="text-decoration-none text-muted">For investor's attention</a>
                  <a href="javascript:void(0)" className="text-decoration-none text-muted">Investor charter</a>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;

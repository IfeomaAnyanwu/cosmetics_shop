import logo from "../images/logo.PNG";

export default function Footer() {
  return (
    <footer id="footer">
      {/*----footer text----*/}
      <div id="footer-text">
        {/*---------logo --------*/}
        <div id="logo2">
          <h1 id="logo3">
            <img src={logo} alt="" />
          </h1>
        </div>
        {/*----quick links -----*/}
        <div id="quick-links">
          <h2>quick links</h2>
          <a href="drama.html">drama</a>
          <a href="comedy.html">comedy</a>
          <a href="adventure.html">adventure</a>
          <a href="documentary.html">documentary</a>
        </div>
        {/*----quick links ends-----*/}
        {/*----the basics-----*/}
        <div id="the-basics">
          <h2>the basics</h2>
          <a href="about.html">About JustFlicks</a>
          <a href="contact.html">Contact Us</a>
        </div>
        {/*----the basics ends-----*/}
        <div id="legal">
          <h2>legal</h2>
          <a href="privacy.html">Privacy Policy</a>
          <a href="terms.html">Terms of Use</a>
        </div>
      </div>
      {/*----footer text ends----*/}
      {/*---footer/copyright
    <div class="copyright-wrapper">
<p class="copyright">
  JustFlicks &copy;
  <span id="date"></span> 
</p>
    </div>
    end of footer/copyright*/}
    </footer>
  );
}

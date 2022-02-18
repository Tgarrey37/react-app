import React from 'react';
import '../App.css';


function Footer() {
    return (
<footer class="page-footer fixed-bottom font-small bg-dark pt-3">
      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a
             target='_blank'
              class="btn-floating btn-fb mx-1"
              href="https://github.com/Tgarrey37"
            >
              <i class="fab fa-github"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
            target='_blank'
              class="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/taylor-garrey-4934b71a8/"
            >
              <i class="fab fa-linkedin-in"> </i>
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2022 Copyright:
        <a className='name-style'target='_blank' href="https://github.com/Tgarrey37">
          {" "}
          Taylor Garrey
        </a>
      </div>
    </footer>
    )
}
export default Footer;
import React from 'react';
import { Container, } from 'reactstrap';

export default () => (
  <header id="header">
    <Container>
      <div className="logo float-left">
        <h1 class="text-light logo-title"><a href="#intro" class="scrollto"><span>MUGSTORE</span></a>
        </h1>
      </div>
      <nav class="left-nav float-right d-none d-lg-block">
        <ul>
          <li>
            <a href="#"><img src="https://img.icons8.com/ios/50/000000/shopping-bag.png" width="50%" height="50%"></a>
        </li>
            <li>
              <a href="#"><img src="https://img.icons8.com/ios/50/000000/hearts.png" width="50%" height="50%"></a>
        </li>
              <li>
                <a href="#"><img src="https://img.icons8.com/ios/50/000000/search--v1.png" width="50%" height="50%"></a>
        </li>
                <li>
                  <a href="#"><img src="https://img.icons8.com/ios/50/000000/user.png" width="50%" height="50%"></a>
        </li>
      </ul>
    </nav><!-- .left-nav -->
    <nav class="main-nav float-right d-none d-lg-block w-55" style={{ marginTop: '0.3em' }}>
                <ul>
                  <li class="active"><a href="#intro">Home</a></li>
                  <li class="drop-down ">
                    <a href>Genre</a>
                    <ul style={{ columns: '2', webkitColumns: '2', mozColumns: '2' }}>
                      <li><a href="#">Bag</a></li>
                      <li><a href="#">Balo</a></li>
                      <li><a href="#">Vali</a></li>
                      <li><a href="#">HandBag</a></li>
                    </ul>
                  </li>
                  <li class="drop-down">
                    <a href>Pages</a>
                    <ul>
                      <li><a href="#">My Account</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Order Tracking</a></li>
                      <li><a href="#">404</a></li>
                    </ul>
                  </li>

                  <li><a href="#footer">New Items (Hot)</a></li>
                </ul>
              </nav>
  </Container>
</header>
);
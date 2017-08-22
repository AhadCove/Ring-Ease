import React from 'react';
import Routes from './Routes';
import {Body} from './Styles/S_Body';
import ScrollToTop from './Styles/ScrollToTop';

const Root = () =>(
      <Body>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </Body>
    );

export default Root;

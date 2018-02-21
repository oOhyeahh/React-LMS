import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Shell } from './APP';

import { Container } from './framework/UI';
import { StudentListView } from './Student';
import { CourseListView } from './Course';

import './styles/app.css';

axios.defaults.baseURL = 'http://lms1210.azurewebsites.net';
// axios.defaults.headers.common.Authorization = 'Bearer Wfe1AqDVLmLwsLHEp491J_e-COUrwLo4a3tn4O4b-xm1jGpyUD4Uc-U3Ea0VkK6amMacgKU6NHRssNJLUUvB1Am42P5Fy6pjDSAgxTn3ufkzL2ELl9asV0vcWwHDTofa_h02-xUlaX_FZhFfZ4p51tPHBV8RBLvxnJypuKCnFNmmmsz_6SwtZV3_VT2NKJfn_qHztrpfNLEWfOPdKOVf18tlC-GoQU-3v9ihjCkhdsA';


const App = () => {
  return (
    <Shell>
      <Container>
        <StudentListView />
        <CourseListView />
      </Container>
    </Shell>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

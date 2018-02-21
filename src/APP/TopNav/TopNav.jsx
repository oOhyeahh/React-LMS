import React from 'react';
import { Container } from '../../framework/UI';

export default function TopNav() {
  return (
    <div className="ui fixed inverted teal menu">
      <Container>
        <a href="#" className="header item">
          My React App
        </a>
        <a href="#" className="item">Courses</a>
        <a href="#" className="item">Students</a>
        <a href="#" className="item">Lecturers</a>
      </Container>
    </div>
  );
}

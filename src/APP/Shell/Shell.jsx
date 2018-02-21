import React from 'react';
import TopNav from '../TopNav/TopNav';
import { Container } from '../../framework/UI';

export default function Shell({ children }) {
  return (
    <div>
      <TopNav />
      <Container>
        {children}
      </Container>
    </div>
  );
}

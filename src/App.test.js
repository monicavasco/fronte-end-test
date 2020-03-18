import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
//const request = require('supertest');

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Deve responder na raiz', () => {
  return request(app).get('/')
    .then((res) => {
      expect(res.status).toBe(200);
    });
});

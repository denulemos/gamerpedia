
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app.js';



it('App funciona Ok', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

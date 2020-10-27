
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../views/login/index';


it('login funciona Ok', () => {
  const rendered = renderer.create(<Login />).toJSON();
  expect(rendered).toBeTruthy();
});

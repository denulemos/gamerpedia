
import React from 'react';
import renderer from 'react-test-renderer';
import DevDetails from '../views/DevDetails/index';



it('DevDetails funciona Ok', () => {
  const rendered = renderer.create(<DevDetails />).toJSON();
  expect(rendered).toBeTruthy();
});

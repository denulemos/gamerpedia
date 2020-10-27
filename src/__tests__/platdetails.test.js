
import React from 'react';
import renderer from 'react-test-renderer';
import PlatDetails from '../views/platDetails/index';


it('PlatDetails funciona Ok', () => {
  const rendered = renderer.create(<PlatDetails />).toJSON();
  expect(rendered).toBeTruthy();
});

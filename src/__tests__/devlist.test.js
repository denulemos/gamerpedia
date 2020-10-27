

import React from 'react';
import renderer from 'react-test-renderer';
import DevList from '../views/devList/index';


it('DevList funciona Ok', () => {
  const rendered = renderer.create(<DevList />).toJSON();
  expect(rendered).toBeTruthy();
});

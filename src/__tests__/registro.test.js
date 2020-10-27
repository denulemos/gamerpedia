
import React from 'react';
import renderer from 'react-test-renderer';
import Registro from '../views/registro/index';

it('registro funciona Ok', () => {
  const rendered = renderer.create(<Registro />).toJSON();
  expect(rendered).toBeTruthy();
});

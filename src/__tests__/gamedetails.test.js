
import React from 'react';
import renderer from 'react-test-renderer';
import GameDetails from '../views/gameDetails/index';


it('DevList funciona Ok', () => {
  const rendered = renderer.create(<GameDetails />).toJSON();
  expect(rendered).toBeTruthy();
});

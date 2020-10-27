
import React from 'react';
import renderer from 'react-test-renderer';
import GamesList from '../views/gamesList/index';


it('GamesList funciona Ok', () => {
  const rendered = renderer.create(<GamesList />).toJSON();
  expect(rendered).toBeTruthy();
});

/* eslint-disable testing-library/no-debugging-utils */
import React from 'react'
import { FavoriteNumber } from '../components/FavoriteNumber'
import { render, screen } from '@testing-library/react'

test('render number input with a label "favorite number"', () => {
  const {debug} = render(<FavoriteNumber />)
  const input = screen.getByLabelText(/favorite number/i);

  debug(input)
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('type', 'number');
})

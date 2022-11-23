import React from 'react'
import { FavoriteNumber } from '../components/FavoriteNumber'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-axe/extend-expect'

test('entering an invalid value shows an error message', () => {
  render(<FavoriteNumber />)
  const input = screen.getByLabelText(/favorite number/i);
  fireEvent.change(input, { target: { value: '10' } })
  expect(screen.getByRole('alert')).toHaveTextContent(/the number is invalid/i)
})

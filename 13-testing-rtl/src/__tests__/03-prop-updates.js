/* eslint-disable testing-library/no-debugging-utils */
import React from 'react'
import user from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { FavoriteNumber } from '../components/FavoriteNumber'

test('entering an invalid value shows an error message - rerender & assert null', () => {
  const { rerender } = render(<FavoriteNumber />)
  const input = screen.getByLabelText(/favorite number/i)
  user.type(input, '10')
  expect(screen.getByRole('alert')).toHaveTextContent(/the number is invalid/i)

  rerender(<FavoriteNumber max={12} />)

  expect(screen.queryByRole('alert')).toBeNull();
})

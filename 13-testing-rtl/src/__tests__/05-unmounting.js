import React from 'react'
import { render, } from '@testing-library/react'
import { Countdown } from '../components/Countdown'

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => { })
})

afterAll(() => {
  console.error.mockRestore()
})

test('does not attempt to set state when unmounted (to prevent memory leaks)', () => {
  jest.useFakeTimers();
  const { unmount } = render(<Countdown />)

  unmount();

  jest.runOnlyPendingTimers()

  expect(console.error).not.toHaveBeenCalled()

})

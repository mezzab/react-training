/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-node-access */
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Modal } from '../components/Modal'

test('modal shows the children', () => {
  const {debug} =render(
    <Modal>
      <div data-testid="test" />
    </Modal>,
  )
  // const { container } = within(document.getElementById('modal-root'))

  expect(screen.getByTestId('test')).toBeInTheDocument()
})



import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

function AccessibleForm() {
  return (
    <form>
      <label htmlFor='username'>Username</label>
      <input id='username' placeholder="email" />
    </form>
  )
}


test('accessible forms pass axe', async () => {
  const { container } = render(<AccessibleForm />)

  const results = await axe(container);

  expect(results).toHaveNoViolations();
})

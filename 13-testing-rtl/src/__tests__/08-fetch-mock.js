import { render, screen, waitFor } from '@testing-library/react';
import { UserNameLabel } from '../components/UserNameLabel';
import { setupServer } from 'msw/node'
import { rest } from 'msw'

// declare which API requests to mock
const server = setupServer(
  // capture "GET /greeting" requests
  rest.get('https://api.fake-rest.refine.dev/users/1', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json({ firstName: 'Marcos' }))
  }),
)

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())


test('checks if returned data from API rendered into component - mock server', async () => {
  render(<UserNameLabel />);

  await waitFor(() => {
    expect(screen.getByText("Marcos")).toBeInTheDocument();
  });
});

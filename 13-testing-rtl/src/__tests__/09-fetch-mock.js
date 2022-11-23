/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, waitFor } from '@testing-library/react';
import { UserNameLabel } from '../components/UserNameLabel';

jest.mock('../services/api', () => ({
  getUser: () => jest.fn().mockReturnValue({ firstName: 'MockedValue' }),
}));

it('checks if returned data from API rendered into component - mock service file', async () => {
  render(<UserNameLabel />);

  await waitFor(() => {
    expect(screen.getByText("MockedValue")).toBeInTheDocument();
  });
});

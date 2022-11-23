import { render, screen, waitFor } from '@testing-library/react';
import { UserNameLabel } from '../components/UserNameLabel';

test('checks if returned data from API rendered into component - using backend', async () => {
  render(<UserNameLabel />);

  await waitFor(() => {
    expect(screen.getByText("Louie")).toBeInTheDocument();
  });
});

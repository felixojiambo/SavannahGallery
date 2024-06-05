/* eslint-disable testing-library/no-wait-for-multiple-assertions */
// src/pages/HomePage.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import HomePage from './HomePage';

jest.mock('axios');

const mockUsers = [
  { id: 1, name: 'User One' },
  { id: 2, name: 'User Two' },
];

const mockAlbums = [
  { userId: 1, id: 1, title: 'Album One' },
  { userId: 2, id: 2, title: 'Album Two' },
];

describe('HomePage', () => {
  beforeEach(() => {
    axios.get.mockImplementation((url) => {
      if (url === 'https://jsonplaceholder.typicode.com/users') {
        return Promise.resolve({ data: mockUsers });
      }
      if (url === 'https://jsonplaceholder.typicode.com/albums') {
        return Promise.resolve({ data: mockAlbums });
      }
    });
  });

  it('displays users and their album count', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText('User One - 1 albums')).toBeInTheDocument();
      expect(screen.getByText('User Two - 1 albums')).toBeInTheDocument();
    });
  });
});

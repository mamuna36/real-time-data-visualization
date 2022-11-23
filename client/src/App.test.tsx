import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders start measurement button', () => {
  render(<App />)
  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toBeInTheDocument()
})

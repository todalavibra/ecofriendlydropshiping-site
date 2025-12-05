import '@testing-library/jest-dom'
import React from 'react'

// Mock next/image to avoid console errors about boolean attributes
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, priority, ...rest } = props
    return React.createElement('img', rest)
  },
}))

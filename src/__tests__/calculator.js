import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Calculator from '../calculator'

/*
 `toHaveTextContent` assertion is imported from `@testing-library/jest-dom/extend-expect` see jest.config.js
*/

test('The cleat button switches fro AC to C when there is an entry', () => {
  const {getByText} = render(<Calculator />)
  const clearButton = getByText('AC')

  fireEvent.click(getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})

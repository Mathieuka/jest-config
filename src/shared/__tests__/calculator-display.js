import React from 'react'
import serializer from 'jest-emotion'
import {render} from '@testing-library/react'
import CalculatorDisplay from '../calculator-display'

expect.addSnapshotSerializer(serializer)

test('Should make snapshot', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      color: white;
      background: #1c191c;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    <div
      class="emotion-0"
    >
      <div
        class="autoScalingText"
        style="transform: scale(1,1);"
      >
        0
      </div>
    </div>
  `)
})

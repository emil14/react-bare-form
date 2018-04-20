import renderer from 'react-test-renderer'
import React from 'react'
import Form from '../src'

test('Form renders with attributes', () => {
  const formProps = {
    name: 'myForm',
    id: 'myForm',
    className: 'bare-form'
  }
  const tree = renderer
    .create(<Form {...formProps}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Form renders its children', () => {
  const formProps = {
    name: 'myForm',
    content: [
      {
        name: 'mySelect',
        element: 'select',
        options: [
          {
            label: 'First option',
            value: 0,
          },
          {
            label: 'Second option',
            value: 1,
          }
        ]
      },
      {
        name: 'myInput',
        element: 'input',
        label: 'Password:',
        type: 'password'
      }
    ]
  }
  const tree = renderer
    .create(<Form {...formProps}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

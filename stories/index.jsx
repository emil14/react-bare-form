import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'
import Form, { stateManager as formStateManager } from '../src/index'
import './style.css'

class Wrapper extends React.PureComponent {
  state = object('Wrapper state', {
    id: 'myId',
    className: 'myClass',
    style: { padding: '10px' },
    onChange: updatedEl => this.setState(formStateManager(updatedEl)),
    content: [
      {
        name: 'mySelect',
        element: 'select',
        onChange: () => console.log('mySelect was changed!'),
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
        type: 'password',
      },
      {
        name: 'myTextInput',
        element: 'input',
        label: 'Text:',
        type: 'text',
      }
    ],
    model: { mySelect: '', myInput: '', myTextInput: '' }
  })
  render = () => <Form {...this.state} />
}

storiesOf('Storybook Knobs', module)
  .addDecorator(withKnobs)
  .add('Bare Form', () => <Wrapper />);

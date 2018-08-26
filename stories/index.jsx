import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'
import Form, { stateManager as formStateManager } from '../src/index'
import './style.css'

class Wrapper extends React.PureComponent {
  state = object('State wrapper', {
    id: 'myId',
    className: 'myClass',
    style: { padding: '10px' },
    onChange: this.updateFormState,
    content: [
      {
        name: 'mySelect',
        element: 'select',
        onChange: () => console.log('mySelect was changed!'),
        options: [
          { label: 'First option', value: 0 },
          { label: 'Second option', value: 1 }
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
    initialState: { mySelect: '', myInput: '', myTextInput: '' },
  });

  updateFormState = updatedEl => {
    this.setState(prevState => {
      const newFormState = { ...prevState.formState, ...updatedEl };
      return { formState: newFormState };
    });
  }

  render = () => <Form {...this.state} />;
}

storiesOf('Storybook Knobs', module)
  .addDecorator(withKnobs)
  .add('Bare Form', () => <Wrapper />);

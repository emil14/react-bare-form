# React Bare Form
> Render bare HTML-form from JavaScript object with React!

[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)
[![Build Status](https://travis-ci.com/emil14/react-bare-form.svg?branch=master)](https://travis-ci.com/emil14/react-bare-form)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Getting started

### WIP: Installation

```bash
npm install --save react-bare-form
```

### Usage example

code:
```jsx
import Form from 'react-bare-form';

class MyComponent extends React.PureComponent {
  state = {
    formContent: [
      {
        element: 'select',
        name: 'mySelect',
        options: [
          { label: 'First option', value: 0 },
          { label: 'Second option', value: 1 }
        ],
        onChange: () => console.log('mySelect was changed!'),
      },
      {
        name: 'myInput',
        element: 'input',
        label: 'Password:',
        type: 'password'
      },
      {
        name: 'myTextInput',
        element: 'input',
        label: 'Text:',
        type: 'text'
      }
    ],
    formState: { mySelect: '', myInput: '', myTextInput: '' }
  };

  updateFormState = updatedEl => {
    this.setState(prevState => {
      const newFormState = { ...prevState.formState, ...updatedEl };
      return { formState: newFormState };
    });
  }

  render() {
    const { formContent, formState } = this.props;
    const anyPropsYouWant = {
      id: 'myId',
      className: 'myClass',
      style: { padding: '10px' }
    };

    return (
      <Form
        content={formContent}
        initialState={formState}
        onChange={this.updateFormState}
        {...anyPropsYouWant}
      />
    );
  }
}
```

result:
```html
<form class="my-form">
  <select class="my-form__select my-form__select--my">
    <option value="0">First option</option>
    <option value="1">Second option</option>
  </select>
  <label for="myInput">Password</label>
  <input name="myInput" type="password" />
  <label for="myTextInput">Text</label>
  <input name="myTextInput" type="text" />
</form>
```

## Contributing guide
```bash
git clone git@github.com:emil14/react-bare-form.git
npm i
npm run test
npm run build
```

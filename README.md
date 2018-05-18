# React Bare Form
> Render bare HTML-form from JavaScript object with React!

[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
## Getting started
### WIP: Installation
```bash
npm install --save react-bare-form
```
### Usage example
#### Source
```jsx
import Form, { stateManager as formStateManager } from '../src/index'

class MyComponent extends React.PureComponent {
  state = {
    // any props you like
    id: 'myId',
    className: 'myClass',
    style: { padding: '10px' },
    // component specific
    onChange: updatedEl => this.setState(formStateManager(updatedEl)),
    /* `formStateManager` is just a small function that help you avoid boilerplate:
      updatedEl => prevState => {
        const newModel = { ...prevState.model, ...updatedEl }
        return { model: newModel }
      }
    */
    content: [
      {
        name: 'mySelect',
        element: 'select',
        onChange: () => console.log('mySelect was changed!'),
        options: [
          {
            label: 'First option',
            value: 0
          },
          {
            label: 'Second option',
            value: 1
          }
        ]
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
    model: { mySelect: '', myInput: '', myTextInput: '' }
  }
  render = () => <Form {...this.state} />
}
```
#### Result
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

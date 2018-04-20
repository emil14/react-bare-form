# React Bare Form
> Render bare HTML-form from JavaScript object with React!

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
## Getting started
### WIP: Installation
```bash
npm install --save react-bare-form
```
### Usage example
#### Source
```jsx
import Form from 'react-bare-form'

const myComponent = () => {
  const formProps = {
    name: 'myForm',
    className: 'my-form',
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
  };
  return <Form {...formProps} />;
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
</form>
```
## Contributing guide
```bash
git clone git@github.com:emil14/react-bare-form.git
npm i
npm run test
npm run build
```

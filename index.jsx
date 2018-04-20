import React from 'react';
import { render } from 'react-dom';

const Form = props => {
  const { rootProps, content } = props;
  const children = content.map(child => {
    const {
      element: Element,
      name,
      options = [],
      label: labelText,
      text,
      ...elementProps
    } = child;
    const body =
      Element === 'select'
        ? options.map(optionProps => <option {...optionProps}>{optionProps.label}</option>)
        : text;
    return (
      <React.Fragment>
        {labelText && <label for={name}>{labelText}</label>}
        <Element
          name={name}
          className={`form__${Element}--${name}`}
          key={name}
          {...elementProps}
        >
          {body}
        </Element>
      </React.Fragment>
    );
  });
  return (
    <form {...rootProps} className='form'>
      {children}
    </form>
  );
};

const App = () => {
  const formProps = {
    name: 'myForm',
    content: [
      {
        name: 'mySelect',
        element: 'select',
        options: [
          {
            label: 'Пункт 1',
            value: 0,
            selected: true
          }
        ]
      },

      {
        name: 'myInput',
        element: 'input',
        label: 'foo',
        type: 'text'
      }
    ]
  };
  return <Form {...formProps} />;
};

render(<App />, document.getElementById('root'));

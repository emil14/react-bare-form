import React from 'react';

const Form = props => {
  const { rootProps, content, className } = props;
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
          className={`${className}__${Element} ${className}__${Element}--${name}`}
          key={name}
          {...elementProps}
        >
          {body}
        </Element>
      </React.Fragment>
    );
  });
  return <form {...rootProps} className='form'>{children}</form>;
};

export default Form;

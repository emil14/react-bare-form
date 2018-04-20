import React from 'react' // eslint-disable-line no-unused-vars

const Form = props => {
  const { content = [], ...rootProps } = props
  const children = content.map(child => {
    const {
      element: Element,
      name,
      options = [],
      label: labelText,
      text,
      className = 'form',
      ...elementProps
    } = child
    const body =
      Element === 'select'
        ? options.map(optionProps => <option {...optionProps} key={optionProps.value}>{optionProps.label}</option>)
        : text
    return (
      <React.Fragment key={name}>
        {labelText && <label for={name}>{labelText}</label>}
        <Element
          name={name}
          className={`${className}__${Element} ${className}__${Element}--${name}`}
          {...elementProps}
        >
          {body}
        </Element>
      </React.Fragment>
    )
  })
  return <form {...rootProps}>{children}</form>
}

export default Form

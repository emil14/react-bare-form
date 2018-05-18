import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.PureComponent {
  static propTypes = {
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
    model: PropTypes.objectOf(PropTypes.string).isRequired,
  }

  handleChange = (key, value, handler) => {
    const upd = { [key]: value }
    handler && handler(upd)
    this.props.onChange && this.props.onChange(upd)
  }

  mapContentToChildren = child => {
    const { model } = this.props
    const {
      element: Element,
      name,
      options = [],
      label: labelText,
      text,
      onChange: onChangeLocal,
      className = 'form',
      ...elementProps
    } = child
    const body = Element === 'select'
      ? options.map(optionProps => <option {...optionProps} key={optionProps.value}>{optionProps.label}</option>)
      : text
    return (
      <React.Fragment key={name}>
        {labelText && <label htmlFor={name}>{labelText}</label>}
        <Element
          name={name}
          value={model[name]}
          onChange={e => this.handleChange(name, e.target.value, onChangeLocal)}
          className={`${className}__${Element} ${className}__${Element}--${name}`}
          {...elementProps}
        >
          {body}
        </Element>
      </React.Fragment>
    )
  }

  render = () => {
    const { model, onChange, content, ...rootProps } = this.props
    const children = content.map(this.mapContentToChildren)
    return <form {...rootProps}>{children}</form>
  }
}

export const stateManager = updatedEl => prevState => {
  const newModel = { ...prevState.model, ...updatedEl }
  return { model: newModel }
}

export default Form

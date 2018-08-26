import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.PureComponent {
  static propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      element: PropTypes.string.isRequired,
      onChange: PropTypes.func,
      options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })),
    })).isRequired,
    initialState: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  };

  handleChange = (key, value, handler) => {
    const update = { [key]: value };
    handler && handler(update);
    this.props.onChange && this.props.onChange(update);
  }

  mapContentToChildren() {
    const { content, initialState } = this.props;

    return content.map(child => {
      const {
        element: Element,
        name,
        options = [],
        label: labelText,
        text,
        onChange: onChangeLocal,
        className = 'form',
        ...elementProps
      } = child;

      const body = Element === 'select'
        ? options.map(({ label, value }) => <option key={value}>{label}</option>)
        : text;

      return (
        <React.Fragment key={name}>
          {labelText && <label htmlFor={name}>{labelText}</label>}
          <Element
            name={name}
            value={initialState[name]}
            onChange={e => this.handleChange(name, e.target.value, onChangeLocal)}
            className={`${className}__${Element} ${className}__${Element}--${name}`}
            {...elementProps}
          >
            {body}
          </Element>
        </React.Fragment>
      )
    });
  }

  render() {
    const {
      initialState: _initialState,
      onChange: _onChange,
      content: _content,
      ...rootProps,
    } = this.props;

    return <form {...rootProps}>{this.mapContentToChildren()}</form>;
  }
}

export default Form;

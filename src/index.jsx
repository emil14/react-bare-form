import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.PureComponent {
  static propTypes = {
    initialState: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    onChange: PropTypes.func,
    content: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      element: PropTypes.string.isRequired,
      onChange: PropTypes.func,
      options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })),
    })),
  };

  static defaultProps = {
    initialState: {},
    content: [],
  }

  handleChange = (key, value, handler) => {
    const update = { [key]: value };
    handler && handler(update);
    this.props.onChange && this.props.onChange(update);
  }

  mapContentToChildren() {
    const { content, initialState } = this.props;

    return content.map(({
      element: Element,
      name,
      options = [],
      label: labelText,
      text,
      onChange,
      className = 'form',
      ...customProps,
    }) => {
      const props = {
        name,
        value: initialState[name],
        onChange: e => this.handleChange(name, e.target.value, onChange),
        className: `${className}__${Element} ${className}__${Element}--${name}`,
        ...customProps,
      };
      const body = Element === 'select'
        ? options.map(({ label, value }) => <option key={value}>{label}</option>)
        : text;

      return (
        <React.Fragment key={name}>
          {labelText && <label htmlFor={name}>{labelText}</label>}
          <Element {...props}>{body}</Element>
        </React.Fragment>
      );
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

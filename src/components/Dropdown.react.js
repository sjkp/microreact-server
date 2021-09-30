import PropTypes from 'prop-types';
import React from 'react';

import clsx from 'clsx';

class Dropdown extends React.Component {
  static displayName = 'Dropdown';

  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    selected: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    floatingLabel: PropTypes.bool,
    fullWidth: PropTypes.bool,
    fixHeight: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    placeholder: null,
    floatingLabel: false,
    fullWidth: false,
    fixHeight: false,
  };

  componentDidUpdate(prevProps) {
    const { selected } = this.props;
    if (selected !== prevProps.selected) {
      this.upgradeElement();
    }
  }

  onChange = (value) => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  upgradeElement = () => {
    const { textfield } = this.refs;
    if (textfield.attributes['data-upgraded']) {
      textfield.attributes.removeNamedItem('data-upgraded');
      componentHandler.upgradeElement(textfield);
    }
  };

  render() {
    const { id, floatingLabel, fullWidth, fixHeight } = this.props;
    const className = clsx(this.props.className,
      'mdl-textfield',
      'mdl-js-textfield',
      'getmdl-select',
      {
        'mdl-textfield--floating-label': floatingLabel,
        'getmdl-select__fullwidth': fullWidth,
        'getmdl-select__fix-height': fixHeight,
      });

    return (
      <div ref="textfield" className={className}>
        <input
          className="mdl-textfield__input"
          value={this.props.selected}
          type="text"
          id={id}
          readOnly
          tabIndex="-1"
          placeholder={this.props.placeholder}
        />
        {
          !!this.props.label &&
          <label className="mdl-textfield__label" htmlFor={id}>
            { this.props.label }
          </label>
        }
        <ul ref="list" htmlFor={id} className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
          {
            this.props.options.map((item, index) => {
              const { text = item, value = item } = (typeof(item) === 'object' ? item : {});
              return (
                <li key={index}
                  className="mdl-menu__item"
                  onClick={() => this.onChange(value.toString())}
                >
                  { text }
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Dropdown;

const materialMenuShow = MaterialMenu.prototype.show;
MaterialMenu.prototype.show = function (e) {
  const forRect = this.forElement_.parentElement.getBoundingClientRect();
  const remainingHeight = document.documentElement.clientHeight - forRect.bottom;
  const requiredHeight = Math.min(320, this.element_.offsetHeight);
  if (requiredHeight > remainingHeight) {
    this.container_.style.maxHeight = '320px';
    this.container_.style.marginTop = `-${requiredHeight - remainingHeight}px`;
  } else {
    this.container_.style.maxHeight = `${remainingHeight}px`;
    this.container_.style.marginTop = '';
  }
  materialMenuShow.call(this, e);
};

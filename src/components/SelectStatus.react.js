const PropTypes = require('prop-types');
const React = require('react');

const SelectStatus = props => {
  const style = {
    display: 'block',
    margin: '20px',
    fontSize: 'inherit',
  };

  if (props.isSelected) {
    return (<span style={style} className="material-icons" aria-hidden="true">check_box</span>);
  } else {
    return (<span style={style} className="material-icons" aria-hidden="true">check_box_outline_blank</span>);
  }
};

SelectStatus.propTypes = {
  isSelected: PropTypes.bool.isRequired,
};

export default SelectStatus;

import PropTypes from 'prop-types';
import Fab from '@mui/material/Fab';

const CalculatorButton = ({ value, isPrimary, onClick }) => (
  <Fab
    sx={{ m: '8px' }}
    size="medium"
    color={isPrimary ? 'primary' : 'transparent'}
    aria-label="add"
    onClick={() => onClick(value)}
  >
    {value}
  </Fab>
);

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  onClick: PropTypes.func,
};

CalculatorButton.defaultProps = {
  isPrimary: false,
  onClick: () => {},
};

export default CalculatorButton;

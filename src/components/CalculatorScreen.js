import InputBase from '@mui/material/InputBase';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

const CalculatorScreen = ({ value, operation, onChange }) => (
  <Card component={Stack} direction="row" alignItems="center" sx={{ p: '4px 12px', mb: '24px' }}>
    <Typography color="primary">{operation}</Typography>
    <InputBase
      data-testid="calculator-input"
      name="equation"
      disabled
      onChange={onChange}
      value={value}
      sx={{ direction: 'rtl', width: '100%' }}
    />
  </Card>
);

CalculatorScreen.propTypes = {
  value: PropTypes.string.isRequired,
  operation: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

CalculatorScreen.defaultProps = {
  operation: '',
};

export default CalculatorScreen;

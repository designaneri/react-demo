import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MuiPhoneNumber from 'material-ui-phone-number';
import FormHelperText from '@mui/material/FormHelperText';

export const CustomizedPhone = (props: any) => {
  const { title, value, onChange, errorValue, name, errorMessage } = props;

  return (
    <FormControl fullWidth sx={{ mb: 2 }} error={errorValue}>
      <InputLabel shrink htmlFor="bootstrap-input">
        {title}
      </InputLabel>
      <MuiPhoneNumber
        defaultCountry={'be'}
        name={name}
        value={value}
        onChange={(phone) => onChange(phone)}
        error={errorValue}
      />
      {errorValue ? <FormHelperText>{errorMessage}</FormHelperText> : ''}
    </FormControl>
  );
};

export default CustomizedPhone;

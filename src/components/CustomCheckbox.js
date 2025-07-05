import { Checkbox } from '@chakra-ui/react';

function CustomCheckbox({ name, isChecked, onChange, children, ...props }) {
  return (
    <Checkbox
      name={name}
      isChecked={isChecked}
      onChange={onChange}
      colorScheme="brand"
      color="gray.200"
      borderColor="gray.500"
      iconColor="#D2B48C"
      _checked={{
        borderColor: '#7f9cf5',
        '& .chakra-checkbox__control': {
          boxShadow: '0 0 0 2px #D2B48C',
        },
      }}
      {...props}
    >
      {children}
    </Checkbox>
  );
}

export default CustomCheckbox;
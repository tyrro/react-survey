export const dropdownStyles = {
  option: (provided, optionProps) => ({
    ...provided,
    background: optionProps.isFocused || optionProps.isSelected ? 'grey' : 'inherit',
  }),
  control: provided => ({
    ...provided,
    height: '56px',
    borderRadius: '12px',
    fontSize: '17px',
    lineHeight: '22px',
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    borderColor: 'transparent',
    boxShadow: 'none',
    ':hover': { borderColor: 'transparent' },
  }),
  placeholder: provided => ({
    ...provided,
    color: '#fff',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#fff',
    ':hover': { color: '#fff' },
  }),
  input: provided => ({
    ...provided,
    color: '#fff',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    color: '#fff',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#fff',
  }),
};

// prettier-ignore
export default () => ({
  control: (base) => ({
    ...base,
    boxShadow: '0 0 0 1px #01D277',
    cursor: 'pointer',
  }),
  option: (base, state) => ({
    ...base,
    padding: '10px 32px',
    fontSize: '13px',
    lineHeight: '16px',
    color: state.isFocused ? '#ffffff' : '##0e303e',
    backgroundColor: state.isFocused ? '#f95759' : '',

    // Hover not available from state
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#f95759',
    },
  }),
})

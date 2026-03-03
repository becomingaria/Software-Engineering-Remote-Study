function Input({ type = 'text', name, value, onChange, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ padding: '0.5rem', fontSize: '1rem', width: '100%', boxSizing: 'border-box' }}
    />
  )
}

export default Input

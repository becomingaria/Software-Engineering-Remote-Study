function Label({ htmlFor, text }) {
  return (
    <label htmlFor={htmlFor} style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 'bold' }}>
      {text}
    </label>
  )
}

export default Label

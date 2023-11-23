export default function TextArea({ name, id, placeholder }) {
  return (
    <div className='input-wrapper'>
      <textarea
        className='textarea'
        name={name}
        id={id}
        rows='8'
        placeholder={placeholder}
        required
        onFocus={(e) => {
          if (!e.target.classList.contains('input-focused')) {
            e.target.classList.add('input-focused');
          }
        }}
        onBlur={(e) => {
          if (e.target.value.length === 0) {
            e.target.classList.remove('input-focused');
          }
        }}
      />
      <label htmlFor='message'>{placeholder}</label>
      <span />
    </div>
  );
}

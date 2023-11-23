export default function Input({ type, name, id, placeholder }) {
  return (
    <div className='input-wrapper'>
      <input
        className='input'
        type={type}
        name={name}
        id={id}
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
      <label htmlFor='email'>{placeholder}</label>
      <span />
    </div>
  );
}

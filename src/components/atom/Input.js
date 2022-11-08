import React from 'react'

const Input = ({ type, name, id, placeholder, icon, value, setValue }) => {

  return (
    <div className="form-control input-icons">
      <i class={`fa fa-${icon} icon`}></i>
      <input
        className='input'
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {/* {type === 'password' ? <i class={`fa fa-eye eye-icon`}></i> : null} */}
    </div>
  )
}

export default Input
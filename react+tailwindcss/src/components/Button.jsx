import React from 'react'

const Button = ({styles}) => {
  return (
    <button type={'button'} className={`py-3 px-6 font-montserrat font-medium rounded-[10px] text-[18px] bg-blue-gradient  outline-none ${styles}`}>
        Boshlash
    </button>
  )
}

export default Button
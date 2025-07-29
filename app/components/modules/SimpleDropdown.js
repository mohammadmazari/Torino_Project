'use client'
import { useRef, useState } from 'react'

const SimpleDropdown = ({
  options,
  defaultText = "انتخاب کنید",
  defaultIcon = null,
  sele,
  value,
}) => {
  const [internalSelected, setInternalSelected] = useState({
    label: defaultText,
    icon: defaultIcon,
  });

  const buttonRef = useRef(null); 

  const selected = value || internalSelected;

  const handleSelect = (option) => {
    setInternalSelected(option);
    sele && sele(option);


    if (buttonRef.current) {
      buttonRef.current.blur();
    }
  };

  return (
    <div className="dropdown w-full">
      <label
        tabIndex={0}
        ref={buttonRef} // 👈 اتصال ref به اینجا
        className="btn flex w-full md:w-52 items-center m-0 gap-2 rounded-md text-[16px] font-medium border-gray-400"
      >
        {selected.icon && <span>{selected.icon}</span>}
        {selected.label}
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content w-full max-w-full h-[255px] overflow-y-auto flex menu p-2 shadow bg-base-100 rounded-box"
        style={{ whiteSpace: 'nowrap' }}
      >
        {options.map((option, index) => (
          <li key={index} className="inline-block w-1/2">
            <a
              onClick={() => handleSelect(option)}
              className="flex items-center gap-2"
            >
              {option.icon && <span>{option.icon}</span>}
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SimpleDropdown;

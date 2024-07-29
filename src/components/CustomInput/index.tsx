import { Fragment, ReactNode, useEffect, useState } from "react";
import { SVG_DATA } from "../../utils/constants";
import SVG from "react-inlinesvg";
import "./CustomInput.css";
interface CustomInputProps {
  placeholder?: string;
  label?: string;
  secondaryAction?: ReactNode;
  inputClass?: string;
  wrapperClass?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type: string;
  required?: boolean;
  value?: any;
}

const CustomInput = ({
  label = "",
  secondaryAction,
  inputClass = "",
  wrapperClass = "",
  type,
  value,
  onChange,
  placeholder,
  required = false,
}: CustomInputProps) => {
  const [inputType, setInputType] = useState<string>("text");
  useEffect(() => {
    setInputType(type);
  }, [type]);

  const toggleType = () => {
    if (inputType == "text") setInputType("password");
    else setInputType("text");
  };

  return (
    <div className={wrapperClass + " input-container mb-4 "}>
      {label.length || secondaryAction ? (
        <div className="flex justify-between input-header mb-2">
          <span className="input-label text-[14px] text-[#C5C7CA]">
            {label}
          </span>{" "}
          {secondaryAction}
        </div>
      ) : (
        <></>
      )}
      <div className="input-textbox-wrapper rounded-[4px] border-[1.5px] border-[#35373B] flex items-center p-3">
        {type == "password" ? (
          <Fragment>
            <input
              aria-labelledby={label}
              required={required}
              className={inputClass + " flex-1 bg-transparent"}
              placeholder={placeholder}
              value={value}
              type={inputType}
              onChange={onChange}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleType();
              }}
            >
              <SVG src={SVG_DATA.eye} className="text-[#7F8084]" />
            </button>
          </Fragment>
        ) : (
          <input
            aria-labelledby={label}
            required={required}
            className={inputClass + " flex-1 bg-transparent"}
            placeholder={placeholder}
            value={value}
            type={inputType}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
};

export default CustomInput;

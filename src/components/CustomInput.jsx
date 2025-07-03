import { useImperativeHandle, useRef } from "react";

export function CustomInput({ ref, placeholder }) {
  const localInputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      // The parent can now call .focus() on the ref
      focus: () => {
        localInputRef.current.focus();
      },
      get value() {
        return localInputRef.current.value;
      },
      // You could expose other methods here too, like .clear()
    };
  });

  return (
    <input
      ref={localInputRef}
      type="email"
      placeholder={placeholder}
      className="w-full border border-gray-300 p-3 rounded-md"
    />
  );
}

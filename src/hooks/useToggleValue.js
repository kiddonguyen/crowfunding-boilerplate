import { useState } from 'react';
/**
 * A custom React hook for managing a toggle state value.
 *
 * This hook allows you to create a simple toggle state and provides a function to toggle it.
 *
 * @param {boolean} initialValue - The initial state value (default is `false`).
 * @returns {Object} An object with the current `value` and a `handleToggleValue` function to toggle it.
 */

export default function useToggleValue(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const handleToggleValue = () => {
    setValue(!value);
  };
  return {
    value,
    handleToggleValue,
  };
}

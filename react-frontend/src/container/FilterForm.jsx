import React, { useCallback, useState } from "react";
import debounce from "lodash.debounce";

function FilterForm({ onChange }) {
  const [inputVal, setInputVal] = useState("");

  /**
   * triggerChange is a debounce function
   * which is invoked on every key press on the filter textbox
   * but execute onec user give pause for 750ms during typing
   */
  // eslint-disable-next-line
  const triggerChange = useCallback(
    debounce((value) => {
      if (typeof onChange === "function") {
        onChange(value);
      }
    }, 750),
    [onChange]
  );

  /**
   * This is a handler function of the filter textbox
   * @param {Event} e
   */
  const handleChange = (e) => {
    // Save the value in the state
    setInputVal(e.target.value);

    // Invoke the triggerChange to pass the data to the parent component
    triggerChange(e.target.value);
  };

  return (
    <div className="filter-form mb-5">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search by name/address/email/phone/company"
          value={inputVal}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default FilterForm;

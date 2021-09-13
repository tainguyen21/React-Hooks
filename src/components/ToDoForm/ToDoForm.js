import React, { useState } from "react";
import PropTypes from "prop-types";

ToDoForm.propTypes = {
  onSubmit: PropTypes.func,
};

ToDoForm.defaultProps = {
  onSubmit: null,
};

function ToDoForm(props) {
  const [value, setValue] = useState("");
  const { onSubmit } = props;

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;

    const formValue = {
      title: value,
    };

    onSubmit(formValue);

    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
}

export default ToDoForm;

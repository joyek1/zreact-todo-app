import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Form.module.css";

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputValue === "") return alert("Wpisz zadanie");
        onFormSubmit(inputValue);
        setInputValue("");
      }}
      className={styles.form}
    >
      <input
        value={inputValue}
        type="text"
        className={styles.input}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button>Dodaj</Button>
    </form>
  );
}

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

type FormProps = {
  heading: string;
};

function Form({ heading }: FormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) => {
      console.log("here 1");
      const result = await fetch("http://localhost:5200/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      return result.json();
    },
  });

  function handleSubmit() {
    mutation.mutate({
      username,
      password,
    });
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h1>{heading}</h1>
      <label>
        Username
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;

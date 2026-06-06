import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const mutation = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) => {
      const result = await fetch("http://localhost:5193/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (!result.ok) {
        setError("unauthorized");
      }
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
      <div>
        <h1>Sign In</h1>
        <label>
          Username
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
export default SignInForm;

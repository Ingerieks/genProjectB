type FormProps = {
  heading: string;
};

function Form({ heading }: FormProps) {
  return (
    <>
      <h1>{heading}</h1>
      <label>
        Username
        <input type="text" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <button>Submit</button>
    </>
  );
}
export default Form;

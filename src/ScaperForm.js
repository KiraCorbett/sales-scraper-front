const ScraperForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log('submitted :)');
  };

  return (
    <form onSubmit={submitHandler}>
      <label for="url">URL Link</label>
      <input type="text" name="url"></input>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ScraperForm;

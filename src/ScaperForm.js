const ScraperForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log('submitted :)');
  };

  return (
    <form onSubmit={submitHandler}>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ScraperForm;

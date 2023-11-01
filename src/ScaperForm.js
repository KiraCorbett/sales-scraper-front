import './App.css';

const ScraperForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log('submitted :)');
  };

  return (
    <div className="scraper-div">
      <form className="scraper-form" onSubmit={submitHandler}>
        <label for="url">URL Link</label>
        <input type="text" name="url"></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ScraperForm;

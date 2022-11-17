import React from 'react';

const Upload = () =>
{
  return (
    <section id="upload">
        <p>Life is a Journey we take Together.</p>
        <div>
            <form class="card journal new-journal form-group">
                <h2>My New Journey:</h2>
                <label for="title">Title:</label>
                <input type="email" class="form-control" id="title" placeholder="My Journal"/>
                <label for="photo">Upload photos:</label>
                <input type="file" class="form-control-file" id="photo"/>
                <label for="desc">Description:</label>
                <textarea class="form-control" id="desc" placeholder="Tell your story here!" rows="5"></textarea>
                <button type="submit" class="btn btn-info col">Submit</button>
                <button type="clear" class="btn btn-info col">Clear</button>
            </form>
        </div>
    </section>
  )
};

export default Upload;
import {React, useContext, useRef, useState} from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Upload = () =>
{
  const {user} = useContext(AuthContext);
  console.log(user);
  const journalTitle = useRef();
  const journalEntry = useRef();

  const [file, setFile] = useState(null);
  const submitHandler = async (e) =>
  {
    e.preventDefault();
    const newJournal =
    {
      userId: user._id,
      title: journalTitle.current.value,
      entry: journalEntry.current.value
    };

    /*if(file)
    {
      const data = new FormData();
      const fileName = `${Date.now() + file.name}`;
      data.append("file", file);
      data.append("name", fileName);
      newJournal.img = fileName;
      try
      {
        await axios.post('/upload', data);
      }
      catch(err)
      {
        console.log(err);
      }
    };*/

    try
    {
      await axios.post('/journals', newJournal);
      window.location.reload();
    }
    catch(err)
    {
      console.log(err);
    };
  };

  return (
    <section id="upload">
        <p>Life is a Journey we take Together.</p>
        <div>
            <form class="card journal new-journal form-group" onSubmit={submitHandler}>
                <h2>My New Journey:</h2>
                <label for="title">Title:</label>
                <input type="text" class="form-control" id="title" ref={journalTitle} required placeholder="My Journal"/>
                <label for="photo">Upload photos:</label>
                <input type="file" class="form-control-file" id="photo" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} />
                <label for="desc">Description:</label>
                <textarea class="form-control" id="desc" placeholder="Tell your story here!" ref={journalEntry} required rows="5"></textarea>
                <button type="submit" class="btn btn-info col">Submit</button>
                <button type="clear" class="btn btn-info col">Clear</button>
            </form>
        </div>
    </section>
  )
};

export default Upload;
import React from 'react';
import BackButton from './BackButton';
//import placeholder from '../../assets/images/placeholder-image.jpg';
import { dJournals } from '../../assets/dummyData';

const Single = () =>
{
    const activeJournal = dJournals.find(journal => journal.id === 12);

  return (
    <section id="single-journal row">
        <BackButton/>
        <h2 class="journal-title">{activeJournal.title}</h2>
        <p class="journal-desc">
            {activeJournal.entry}
        </p>

        <div class="flex">

            <div class="single-img card bg-light">
                <img class="card-img-top img-preview" src={activeJournal.img} alt=""/>
            </div>

            <div class="dropdown">
                <button class="btn add-btn btn-info dropdown-toggle" id="add-photo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Add Photo
                </button>
                <div class="dropdown-menu" aria-labelledby="add-photo">
                    <input type="file" class="form-control-file new-journal dropdown-item" id="photo"/>
                </div>
            </div>
            
            <div class="dropdown">
                <button class="btn add-btn btn-info dropdown-toggle" id="share" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Share
                </button>
                <div class="dropdown-menu" aria-labelledby="share">
                    <input type="text" class="form-control-file new-journal dropdown-item" id="link" placeholder="Shareable Link Here"/>
                </div>
            </div>
            
        </div>

        <form class="form-group col-12">
            <div>
                <label for="commenting"></label>
                <textarea class="form-control" id="commenting" placeholder="Add a comment." rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-info col">Submit</button>
        </form>
        
        <div class="journal-comment col-12">
            <p>
                This is an example comment!<br />
                <span>09/13/2022 by BoopSoop</span>
            </p>
        </div>
        </section>
    )
};

export default Single;
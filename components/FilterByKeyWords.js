import React, { useContext, useState } from 'react';

import { GlobalContext } from './GlobalContext';
import FormStyles from './Styles';

export default function FilterByKeyWords() {
    const {dispatch} = useContext(GlobalContext);
    const [keyWords,setKeyWords] = useState('');

    function searchJobByKeyWords(e) {
        e.preventDefault();
        dispatch({type:"SEARCH_BY_KEY_WORDS", foundValues: keyWords});
        setKeyWords('');
        console.log(keyWords)
    }

  return (
      <div className="form_container">
          <FormStyles onSubmit={searchJobByKeyWords}>
            <input 
            type="text" 
            placeholder="Title, companies, expertise or benefits"
            value={keyWords}
            onChange={e => setKeyWords(e.target.value)}
            />
            <button>Search</button>
        </FormStyles>
      </div>
  )
}

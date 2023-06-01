import { useState } from 'react';
import 'bulma/css/bulma.min.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App () {
   const [images, setImages] = useState([]);

   const handleSubmit = async (term) => {
     const result = await searchImages(term);

     setImages(result);
   };

    return (
     <div>
       <button class="button is-primary">Primary Search</button>
        <div>
         <br></br>
        </div>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images}/>
     </div>
    );
};
export default App;
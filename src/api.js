import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
       headers: {
          Authorization: 'Client-ID CyUSrzQaf-Oqg784u8QN7-PYIeH_qPnJoJq-S0nb65A',
       },
       params: {
         query: term,
       },
    });

    return response.data.results;
};

export default searchImages;
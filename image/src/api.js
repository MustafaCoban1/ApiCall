import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=v8KW4syeKtGh9-k37il6-6SrUy24bTsdAj9deuhY4xM', {
      headers:{
        Authorization: 'Client-ID v8KW4syeKtGh9-k37il6-6SrUy24bTsdAj9deuhY4xM',
      },
      params:{
        querry: term,
      },
    });
    debugger;
    return response.data.results;
  };

  export default searchImages;
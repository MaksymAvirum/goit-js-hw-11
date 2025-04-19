
import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function getImagesByQuery(query) {
    const PIXABAY_API_KEY = '49809160-ecb9db209c3e158eb7196d46c';
    const PIXABAY_API_URL = 'https://pixabay.com/api/';

    return axios
        .get(PIXABAY_API_URL, {
            params: {
                key: PIXABAY_API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            }
        })
        .then((response) => { return response.data; })
        .catch(error => {
            iziToast.error({ message: `❌ Error fetching images from PIXABAY`, position: 'topRight' });
        })
}
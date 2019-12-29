import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer PXG-mGvaftbPcCn-Yyx4GUzsiaXKWyxSyix5ymZYqxVOUUCXR84_4jjF1mJzPdZhREL5j_msS17oKIjeGUObAPEjWNxGsgKQTdsQG7yMAA3Xxzze4D4-6vSQsFVrXXYx'
    }
});

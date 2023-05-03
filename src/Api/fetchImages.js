// import { Component } from 'react';
import axios from 'axios';

export const fetchImages = async searchQuery => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '34855628-78991e6cca5fe0310616aeb58';
  const BASE_FETCH_OPTIONS =
    'image_type=photo&orientation=horizontal&safesearch=true&per_page=4';
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  try {
    const response = await instance.get(
      `?key=${API_KEY}&q=${searchQuery}&${BASE_FETCH_OPTIONS}&page=1`
    );
    const images = response.data.hits;

    console.log(images);
    return images;
  } catch (error) {
    this.setState({ error });
  } finally {
  }
};

import React, { useState, useEffect } from 'react';
import { Triangle } from 'react-loader-spinner';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import * as ImageService from '../service/images';
import { ImageGalleryItem } from '../components/ImageGalleryItem/ImageGelleryItem'
import { Button } from './Button/Button';

export const App = () => {
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handlerOnSubmit = value => {
    setSearchName(value);
    setPage(1);
    setImages([]);
    setError(null);
    setIsEmpty(false);
  };
  const getPhotos = async (searchName, page) => {
    if (!searchName) return;
    setIsLoading(true);
    try {
      const { hits, totalHits } = await ImageService.getImages(
        searchName,
        page
      );
      if (hits.length === 0) {
        setIsEmpty(true);
      }

      setImages(prevState => [...prevState, ...hits]);
      setIsVisible(page < Math.ceil(totalHits / 12));
    } catch (error) {
      setError(alert(`OOPS! Something went wrong: ${error}`));
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPhotos(searchName, page);
  }, [searchName, page]);
  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
    setIsLoading(true);
  };

  return (
    <>
      <Searchbar onSubmit={handlerOnSubmit} />
      {isEmpty && <h2>Sorry, there are no images...</h2>}
      {error && <h2>Something went wrong - {error}</h2>}

      <ImageGallery children={<ImageGalleryItem images={images} />} />
      {isVisible && !isLoading && images.length > 0 && (
        <Button
          onClick={onLoadMore}
          children={isLoading ? 'Loading' : 'Load more'}
        />
      )}
      {isLoading && (
        <Triangle
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{ marginLeft: '50%' }}
          wrapperClassName=""
          visible={true}
        />
      )}
    </>
  );
};
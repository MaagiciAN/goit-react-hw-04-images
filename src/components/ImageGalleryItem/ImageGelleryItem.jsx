import React, { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { ModalDesign } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [tagsState, setTagsState] = useState('');
  const [largeImageURLState, setLargeImageURLState] = useState('');

  const onOpenModal = (largeImageURL, tags) => {
    setShowModal(true);
    setLargeImageURLState(largeImageURL);
    setTagsState(tags);
  };
  const onCloseModal = () => {
    setShowModal(false);
    setLargeImageURLState('');
    setTagsState('');
  };

  return images.map(({ id, webformatURL, tags, largeImageURL }) => {
    return (
      <>
        <li
          className={css.imageGalleryItem}
          key={id}
          onClick={() => onOpenModal(largeImageURL, tags)}
        >
          <img
            className={css.imageGalleryItemImage}
            src={webformatURL}
            alt={tags}
          />
        </li>
        {showModal && (
          <ModalDesign
            modalIsOpen={showModal}
            closeModal={onCloseModal}
            largeImg={largeImageURLState}
            tags={tagsState}
          />
        )}
      </>
    );
  });
};
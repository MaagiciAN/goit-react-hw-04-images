import React, { PureComponent } from 'react';
import css from './ImageGalleryItem.module.css';
import { ModalForm, MyModal } from 'components/Modal/Modal';

export class ImageGalleryItem extends PureComponent {
  state = {
    showModal: false,
    tags: '',
    largeImageURL: '',
  };
  onOpenModal = (largeImageURL, tags) => {
    this.setState({ showModal: true, largeImageURL, tags });
  };
  onCloseModal = () => {
    this.setState({ showModal: false, largeImageURL: '', tags: '' });
  };
  render() {
    return this.props.images.map(
      ({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <>
            <li
              className={css.imageGalleryItem}
              key={id}
              onClick={() => this.onOpenModal(largeImageURL, tags)}
            >
              <img
                className={css.imageGalleryItemImage}
                src={webformatURL}
                alt={tags}
              />
            </li>
            {this.state.showModal && (
              <ModalForm
                modalIsOpen={this.state.showModal}
                closeModal={this.onCloseModal}
                largeImg={this.state.largeImageURL}
                tags={this.state.tags}
              />
            )}
          </>
        );
      }
    );
  }
}
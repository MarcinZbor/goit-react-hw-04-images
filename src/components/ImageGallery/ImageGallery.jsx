import React from 'react';
import PropTypes from 'prop-types';
import styles from "./ImageGallery.module.css"
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';



const ImageGallery = ({ data, onClickImg }) => {
  return (
    <ul className={styles.gallery}>
      {data.map(el => (
        <ImageGalleryItem key={el.id} data={el} onClickImg={onClickImg} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })),
  onClickImg: PropTypes.func.isRequired,
};

export default ImageGallery;
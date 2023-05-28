import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import getPicturesData from 'API/getData';
import styles from './App.module.css';

// export class App extends React.Component {
//   state = {
//     inputValue: '',
//     picturesData: [],
//     page: 1,
//     totalPages: 1,
//     loading: false,
//     isModal: false,
//     clickedImg: '',
//   };

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [picturesData, setPicturesData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [Modal, setModal] = useState(false);
  const [clickedImg, setClickedImg] = useState('');

  const handleSubmit = inputQuery => {
    setInputValue(inputQuery);
    setPage(1);
    setPicturesData([]);
  };

  const loaderClick = () => {
    setPage(prevState => prevState + 1);
  };

  const handleImageClick = url => {
    setModal(true), setClickedImg(url);
  };

  const onModalClose = () => {
    setModal(false);
  };

  // componentDidUpdate(prevProps, prevState) {
  //   this.state.inputValue !== prevState.inputValue &&
  //     this.setState({ picturesData: [] });

  //   if (
  //     this.state.inputValue !== prevState.inputValue ||
  //     this.state.page !== prevState.page
  //   ) {
  //     this.setState({ loading: true });

  useEffect(() => {
    getPicturesData(inputValue, page)
      .then(response => {
        if (response.data.hits.length === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.',
            { theme: 'colored' }
          );
        } else {
          this.setState(prevState => ({
            picturesData: [...prevState.picturesData, ...response.data.hits],
            totalPages: Math.ceil(
              response.data.totalHits / response.data.hits.length
            ),
          }));

          if (this.state.page === 1) {
            toast.info(`Hooray! We found ${response.data.totalHits} images.`, {
              theme: 'colored',
            });
          }
        }
      })
      .catch(error => {
        toast.error(error.message, { theme: 'colored' });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [inputValue, page]);

  return (
    <div className={styles.container}>
      <Searchbar onSubmit={handleSubmit} />
      {loading && <Loader />}
      <ImageGallery data={picturesData} onClickImg={handleImageClick} />
      {picturesData.length !== 0 && page !== totalPages && (
        <Button onClick={loaderClick} />
      )}
      <ToastContainer autoClose={3000} />
      {this.state.isModal && (
        <Modal onModalClose={onModalClose}>{clickedImg}</Modal>
      )}
    </div>
  );
};

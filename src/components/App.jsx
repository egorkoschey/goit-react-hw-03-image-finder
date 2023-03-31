import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
import { fetchImg } from './service/api';
import ImageGallery from './ImageGallery';
import Button from './Button/Button';
import Loader from './Loader';

export class App extends Component {
  state = {
    search: '',
    page: 1,
    allImages: [],
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { page, search } = this.state;

    if (prevState.page !== page) {
      try {
        if (prevState.page !== page) {
          this.setState({ isLoading: true });
          const res = await fetchImg(search, page);
          this.setState(prevState => ({
            allImages: [...prevState.allImages, ...res.hits],
          }));
        }
      } catch (error) {
        alert(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = (e, value) => {
    e.preventDefault();

    fetchImg(value, 1)
      .then(res =>
        this.setState({ allImages: res.hits, page: 1, search: value })
      )
      .catch(error => alert(error.massage));
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
  const { isLoading, allImages, page } = this.state;
  const isAllImages = allImages.length;
  const imagesPerPage = 12;
  const maxImages = page * imagesPerPage;

  return (
    <div>
      <header>
        <Searchbar onSubmitForm={this.handleSubmit} />
        <ImageGallery items={allImages} />
        {isLoading && <Loader />}
        {isAllImages > 0 && isAllImages >= maxImages && (
          <Button handleButtonClick={this.loadMore} images={allImages} />
        )}
      </header>
    </div>
  );
}
}
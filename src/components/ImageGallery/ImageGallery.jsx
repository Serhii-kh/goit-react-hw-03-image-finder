import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from 'Api/fetchImages';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    searchQuery: '',
    images: null,
    error: null,
    page: '',
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery;
    const nextSearchQuery = this.props.searchQuery;

    if (prevSearchQuery !== nextSearchQuery) {
      this.setState({
        images: [],
        page: 1,
      });

      try {
        await fetchImages(nextSearchQuery, this.state.page).then(images =>
          this.setState(prevState => ({
            images,
            page: prevState.page + 1,
          }))
        );
      } catch (error) {
        this.setState({ error });
      }
    }
  }

  handleLoadMoreBtnClick = async () => {
    try {
      await fetchImages(this.state.searchQuery, this.state.page).then(images =>
        this.setState(prevState => ({
          images,
          page: prevState.page + 1,
        }))
      );
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { images } = this.state;

    return (
      <div>
        {images && (
          <>
            <ul className={css.ImageGallery}>
              {images.map(({ tags, webformatURL, id }) => (
                <ImageGalleryItem key={id} src={webformatURL} alt={tags} />
              ))}
            </ul>
            <button
              type="button"
              className={css.Button}
              onClick={this.handleLoadMoreBtnClick}
            >
              Load more
            </button>
          </>
        )}
      </div>
    );
  }
}

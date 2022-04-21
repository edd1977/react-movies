import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends React.Component {

  state = {
    movies: [],
    loading: false,
  };

  constructor(props) {
    super(props);

    this.searchUpdate = this.searchUpdate.bind(this);
  }

  componentDidMount() {
    // TODO
  }

  searchUpdate(search, movie_type) {
    const url = new URL('http://www.omdbapi.com/');
    const params = {
      apikey: API_KEY,
      type: movie_type === 'all' ? undefined : movie_type,
      s: search,
    };
    if (!params.type) {
      delete params.type;
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    this.setState(() => ({ loading: true }), () => {
      fetch(url).then(res => res.json())
      .then(data => {
        this.setState({
          movies: data.Search || [],
          loading: false,
        });
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    return <main className='container content'>
      <Search searchUpdate={this.searchUpdate} />
      {
        loading ? <Preloader /> : null
      }
      <Movies movies={movies} />
    </main>;
  }

}

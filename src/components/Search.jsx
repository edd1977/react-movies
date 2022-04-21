import React from 'react';

class Search extends React.Component {

  state = {
    search: '',
    movie_type: 'all',
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchUpdate(this.state.search, this.state.movie_type);
    }
  }

  handleFilter = (event) => {
    this.setState(() => ({ movie_type: event.target.dataset['type'] || 'all' }), () => {
      this.props.searchUpdate(this.state.search, this.state.movie_type);
    });
  }

  render() {
    const { search, movie_type } = this.state;

    return <div className="row">
        <div className="input-field">
          <input 
            placeholder="search"
            type="search"
            className="validate"
            value={ search }
            onChange={ event => {
              this.setState({ search: event.target.value });
            } }
            onKeyDown={this.handleKey}
          />
          <button className="btn search" onClick={() => this.props.searchUpdate(this.state.search, this.state.movie_type)} >Search</button>
        </div>
        <div className='radio-group' >
          <p>
            <label>
              <input name="movie_type" type="radio" className="with-gap"
                checked={movie_type === 'all'}
                data-type='all'
                onChange={this.handleFilter}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input name="movie_type" type="radio" className="with-gap"
                checked={movie_type === 'movie'}
                data-type='movie'
                onChange={this.handleFilter}
              />
              <span>Movies</span>
            </label>
          </p>
          <p>
            <label>
              <input name="movie_type" type="radio" className="with-gap"
                checked={movie_type === 'series'}
                data-type='series'
                onChange={this.handleFilter}
              />
              <span>Series</span>
            </label>
          </p>
        </div>
      </div>;
  }

}

export { Search };
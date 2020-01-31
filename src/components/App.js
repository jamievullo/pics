import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'


class App extends React.Component {

    state = {        
        images: []
    };

    //async onSearchSubmit(term) {
    // moved 'async' inside to fix this.setState is not a fn error
    onSearchSubmit = async (term) => {
        // console.log(term)
        //use axios instead of fetch(both asynchronous)
        // set get to variable 'response'
        const response = await unsplash.get('/search/photos', {
            //adds query to end of search and 'term' from searchbar
            params: { query: term }
            //includes headers with my key to identify its me making the query           
        })
        this.setState({images: response.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;
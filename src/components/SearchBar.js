import React from 'react';

class SearchBar extends React.Component {

    //event callback function that gets the user input "onChange"
    //reads easily some use "handle" instead of "on"
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }

    // sets state to default of empty string
    state ={
        term: ""
    }

    //error message *cannot access property "state" of undefined* 
    //unless you use arrow syntax which binds value of "this" for all values in function
    //arrow syntax allows state to be defined because JS 
    //thinks 'this'=undefined instead of an instance of the search bar
    onFormSubmit = (event) => {
        event.preventDefault()
        //this is our user inputted value
        // console.log(this.state.term)
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            // semantic-ui styling
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* passed function to input property "onChange" that references onInputChange function */}
                        {/* uncontrolled form element (stores input on DOM */}
                        {/* <input type="text" onChange={this.onInputChange} /> */}
                        {/* alternate syntax */}
                        {/* <input type="text" onChange={(e) => console.log(e.target.value)} */}
                        {/* controlled form element stores input inside component on state property */}
                        <input type="text" 
                            value={this.state.term} 
                            onChange={e => this.setState({term: e.target.value})} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
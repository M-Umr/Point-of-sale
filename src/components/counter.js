import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 2,
        tags: []
    };

    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;// {/*An ARRAY of tags*/ }
    }
    render() { 
        return (
        <div>
            {this.state.tags.length === 0 && "Please create a new tag!"};
            {this.renderTags()}
        </div>
        );
        //let classes = "badge m-2 badge-";
    };
    
}
 
export default Counter;


//Setting Attribute -> 11
//Rendering Classes dynamically -> 12   (Dynamically use {})
//Rendring list -> 13
//Conditional Rendering -> 14
//Rendering Events -> 15
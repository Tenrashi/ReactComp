import React, {Component} from 'react'; 

class Author extends Component {

  fonctionAuClic() {
    console.log('Captain Obvious'); 
  }

  render() {
    return(
      <div onClick={this.fonctionAuClic.bind(this)}>
        {this.props.name}
      </div>
      );
  }
}
export default Author;

//make the nav bar appear on every page

//toggle between cakes and other
//direct DOM manipulation using jQuery

$('.show-btn').on('click', function() {
  $('.other').show();
});

$('.hide-btn').on('click', function() {
  $('.other').hide();
});

//indirect DOM manipulation using React

class CakeBox extends React.Component {

constructor() {
  super();

  this.state = {
    showCakes: false
  };
}


render() {
  const cakes = this._getCakes();
  let cakeNodes;
  let buttonText = 'Show cakes';

  if (this.state.showCakes) {
    buttonText = 'Hide cakes' ;
    cakeNodes = <div className="cake-list">{cakes}</div>;
  }
  return(
    <div className="other">
    <h3 className="h3">{this._getCakesTitle(cakes.legth)}</h3>
    <button onClick={this._handleClick.bind(this)}>{buttonText}</button>

  );
}

_handleClick(){
  this.setState({
    showCakes: !this.state.showCakes
  });
}
}

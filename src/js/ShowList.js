var AddFriend = require('./AddFriend');

var ShowList = React.createClass({
  render: function() {
    var listItems = this.props.names.map(function(friend, index){
      return (
        <li key={index} ><button onClick={this.props.remove.bind(null, index)}> X </button> {friend}</li>
      )
    }.bind(this));
    return (
      <div>
        <h3>Friends</h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

module.exports = ShowList;
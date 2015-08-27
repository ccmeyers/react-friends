var ShowList = require('./ShowList');
var AddFriend = require('./AddFriend');
var DeleteAllFriends = require('./DeleteAllFriends');

var FriendsContainer = React.createClass({
  getInitialState: function(){
    return {
      name: 'Catherine',
      friends: ['Kristofer', 'Chris', 'Sam', 'Erin', 'Brian'],
    }
  },
  addFriend: function(friend){
    this.setState({
      friends: this.state.friends.concat([friend])
    });
  },
  handleRemoveFriend: function(index){
    console.log('index', index);
    console.log('friends before', this.state.friends);
    this.setState({
      friends: this.state.friends.splice(index,1)
    });
    console.log('friends after', this.state.friends);
  },
  deleteAllFriends: function(){
    this.setState({
      friends: []
    });
  },
  render: function(){
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddFriend addNew={this.addFriend}/>
        <ShowList names={this.state.friends} remove={this.handleRemoveFriend}/>
        <DeleteAllFriends deleteFriends={this.deleteAllFriends}/>
      </div>
    )
  }
});

module.exports = FriendsContainer;
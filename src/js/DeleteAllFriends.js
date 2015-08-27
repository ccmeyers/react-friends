var DeleteAllFriends = React.createClass({
  deleteAll: function() {
    this.props.deleteFriends()
  },
  render: function() {
    return (
      <div>
        <button onClick={this.deleteAll}>Delete All Friends</button>
      </div>
    )
  }
});

module.exports = DeleteAllFriends;
import React from "react";
import moment from "moment";

class Userlist extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,  
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://bruhbook-api.herokuapp.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: [...result.users],
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section>
          {users.map((user) => (
            <article className="container" key={user.id}>
              <p>{moment(user.created_at).format('MMMM Do YYYY, h:mm a')}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </article>
          ))}
        </section>
      );
    }
  }
}

export default Userlist;
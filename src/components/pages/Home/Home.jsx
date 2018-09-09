import React, { Component } from 'react';
import { Header } from '../../../components/layout';
import User from 'react-spa-example-user';
import Request from 'react-http-request';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Request
          url='https://api.github.com/users/ericmdev'
          method='get'
          accept='application/json'
          verbose={true}
        >
          {
            ({error, result, loading}) => {
              if (loading) {
                return <div>Loading...</div>;
              } else {
                if (error) {
                  console.error('Failed to request data for home page component', error);
                  return <div>An error occurred</div>
                }
                // const resultData = JSON.parse(result); // already parsed
                // const company = result.body.map(value => {
                //   return new Company(value);
                // })
                // return <div>{ company.name }</div>
                // console.log(result);
                // return <div>{ JSON.stringify(result) }</div>; // convert to json
                const user = new User(result.body);
                return <div>
                  Name: { user.name }
                  <br/>
                  Company: { user.company }
                </div>;
              }
            }
          }
        </Request>
      </div>
    );
  }
}

export default Home;

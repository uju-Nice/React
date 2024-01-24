import React, {Component} from "react";
import Rainbow from "../HigherOrderComponents/Rainbow";
import axios from 'axios'


class Home extends Component {
  //  state = {
  //     posts: []
  //  }

  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //    .then(res => {
  //     this.setState({
  //       posts: res.data.slice(0,10) 
  //     })
  //    })
  // }

   render (){
      // const {posts} = this.state;
      // const postList = posts.length ? (
      //    posts.map( post => {
      //      return (
      //       <div className="post card" key={post.id}>
      //        <div className="card-content">
      //          <span className="card-title">{post.title}</span>
      //          <p>{post.body}</p>
      //        </div>
      //       </div>
      //      )
      //    })
      // ) : (
      //   <div className="center">No posts for now</div>
      // )
   return (
     <div className="container">
        <h4 className="center">Welcome to Nickos Home page</h4>
            {/* {postList} */}
     </div>
   )
   }

}

export default Rainbow(Home)
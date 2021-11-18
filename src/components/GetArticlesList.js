import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { useParams } from 'react-router';
//
//const GetArticlesList = ({ category }) => {
//    const [data, setData] = useState([]);
//
//    useEffect(() => {
//        axios.get(`https://127.0.0.1:8000/articles/${category}`)
//        .then((res) => {
//        setData(res.data);
//        })
//    }, [category])
//
//    
//
//    console.log(papa)
//    return (
//        <ul>
//            {category}
//        </ul> 
//    )
//    
//}



class GetArticlesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [] 
        };
    }

    componentDidMount() {
        axios.get(`https://127.0.0.1:8000/articles/${this.props.match.params.category}`)
        .then((res) => {
            this.setData(res.data);
        })
    }

    render()  {
      return (
        <div>
          <h2> {this.category} </h2>
        </div>
      );
    }
  }

export default GetArticlesList;


//class Topic extends React.Component {
//  render()  {
//    return (
//      <div>
//        <h3>
//          {this.props.match.params.topicId}
//        </h3>
//      </div>
//    );
//  }
//}
  
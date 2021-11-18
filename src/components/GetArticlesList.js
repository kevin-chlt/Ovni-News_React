import React from 'react';
import axios from 'axios';

class GetArticlesList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {data: []};
    }

    compenentDidMount() {
        let category = this.props.match.params.category;
        axios.get(`https://127.0.0.1:8000/articles/${category}`)
        .then((res) => {
        this.setData(res.data);
        })
    }

    render() {
        return (
        <ul>
            {this.data}
        </ul> 
        )
    } 
}

export default GetArticlesList;

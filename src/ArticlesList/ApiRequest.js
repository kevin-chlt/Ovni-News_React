import axios from 'axios'

export const  Articles = async ({category}) => {
    const [data, setData] = useState();

    axios.get(`http://127.0.0.1:8000/articles/${category}`)
    .then((res) => {
        setData(res.data);
    })

    return data;
}

import { Component } from "react"
import axios from 'axios';
import { Redirect } from "react-router-dom";

class UploadForm extends Component {
    constructor(props) {
      super(props)

      this.state = {
        file: null,
        redirect: !props.authorized
      }
    }
  
    onChange = (e) => {
        this.setState({
            file: e.target.files[0],
            loaded: 0,
        })
    }
  
    onSubmit = (e) => {
        const data = new FormData();
        data.append('file', this.state.file);

        axios.post("http://localhost:5000/upload", data, {

        })
        .then(res => {
            console.log(res.statusText);
        })
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to="/login" />
        }
        return (
            <div>
                <h1>Upload a file</h1>
                <input type="file" className="form-control" onChange={this.onChange}/>
                <button type="button"  onClick={this.onSubmit}>Upload</button>
            </div>
        );
    }
}

export default UploadForm;
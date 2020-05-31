import React, { useState }  from "react"
import axios from "axios";
import { Link } from "gatsby"
import Layout from "../components/layout"


const MyForm = () => {
  const Alert1 =() => {
  ['primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ].map((info, idx) => (
    <Alert key={idx} variant={info}>
      Feedback received! I hope SARAH was helpful.
    </Alert>
  ))};
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/18f2d1a2-d40e-4db2-8ef9-fb3d762d8d3b",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, Alert1, form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
    
    <div>
        <div className="col-md-8 mt-5">
            <h3 style = {{marginLeft: '10px'}}>Feedback and Suggestions</h3>
            <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <label style = {{marginLeft: '10px'}} for="FeedbackAndComments">Feedback:</label>
                <input type="text" name="FeedbackAndComments" className="form-control" id="FeedbackAndComments" placeholder="Enter here" size = '30' style = {{borderColor: 'tomato', borderWidth: '2px', borderRadius: '1px', marginBottom: '20px', marginTop: '5px', marginLeft: '10px'}}/>
            </div> 
            <div className="form-group">
                <label style = {{marginLeft: '10px', marginRight: '10px'}} for="Suggestions">Any suggestions for new ideas?</label>
                <input type="text" name="Suggestions" className="form-control" id="Suggestions" placeholder="Enter here" size = '30' style = {{borderColor: 'tomato',  borderWidth: '2px', borderRadius: '1px', marginLeft: '10px', marginTop: '10px'}}/>
            </div> 
            <button type="submit" className="btn btn-primary"  disabled={serverState.submitting} style = {{backgroundColor: 'tomato', color: 'white', border: 'none', marginTop: '30px', marginLeft: '10px', marginBottom: '20px'}}>
                Submit
            </button>
            {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
                </p>
            )}
            </form>
        </div>
    </div>  
    
     
    );
  };
  
  export default MyForm;
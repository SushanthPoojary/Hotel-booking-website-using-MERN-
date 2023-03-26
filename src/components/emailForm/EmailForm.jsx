import "./emailForm.css";

const EmailForm = () => {
  return (
    <div className="email">
        <h1 className="emailTitle">Save time, Save money!</h1>
        <p className="emailDesc">Sign up and we'll send the best deals to you</p>
        <div className="emailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default EmailForm;
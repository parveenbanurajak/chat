import "./header.css";
import ai from "../assets/ai.svg";
import people from "../assets/people.png";
import google from "../assets/google.svg";
import dropbox from "../assets/dropbox.svg";
import shopify from "../assets/shopify.svg";
import atlassian from "../assets/atlassian.svg";
import slack from "../assets/slack.svg";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="child1">
          <div className="openAi">
            <p>Let’s Build Something amazing with GPT-3 OpenAI</p>
          </div>
          <div className="people-content">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </div>
          <br />
          <div className="inpt">
            <input placeholder="Your Email Address" id="inpt-user"></input>
            <button className="btn-user">Get Started</button>
          </div>
          <div className="img-user">
            <img src={people} />
            1,600 people requested access a visit in last 24 hours
          </div>
        </div>
        <div className="child2">
          <img src={ai} />
        </div>
      </div>
      <div className="items-compny">
        <img src={google}></img>
        <img src={slack}></img>
        <img src={atlassian}></img>
        <img src={dropbox}></img>
        <img src={shopify}></img>
      </div>
    </>
  );
};

export default Header;

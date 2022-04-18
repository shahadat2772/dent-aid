import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="qnaContainer">
      <div className="qna">
        <h3 className=" mb-2">1. Authentication vs. Authorization</h3>
        <p className="">
          Authentication is the process of verifying who someone is, it's used
          to identify a user. Authorization is the process of verifying what
          specific applications, files, and data a user has access to.
        </p>
      </div>
      <div className="qna">
        <h4 className=" mb-2">
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p className="">
          Couple of reasons why i am using firebase for authentication:
        </p>
        <h6>
          <li>Ease of implementation.</li>
        </h6>
        <h6>
          <li>Good Speed.</li>
        </h6>
        <h6>
          <li>There documentation is so vast.</li>
        </h6>
        <h6>
          <li>
            Using social login such as Google, Github, Facebook etc is super
            simple.
          </li>
        </h6>
        <h4 className="my-3">
          Some other options to implement authentication except firebase:
        </h4>
        <h6>
          <li>AuthO</li>
        </h6>
        <h6>
          <li>Password</li>
        </h6>
        <h6>
          <li>Okta</li>
        </h6>
        <h6>
          <li>Password</li>
        </h6>
        <h6>
          <li>MongoDB</li>
        </h6>
      </div>
      <div className="qna">
        <h3 className="">
          3. What other services does firebase provide other than
          authentication?
        </h3>
        <p className="">
          Currently using firebase for authentication. Firebase also provides
          lot more services, some of them:
        </p>
        <li>Cloud Firestore.</li>
        <li>Cloud Functions.</li>
        <li>Cloud Storage..</li>
        <li>Google Analytics..</li>
        <li>Predictions.</li>
        <li>Cloud Messaging.</li>
      </div>
    </div>
  );
};

export default Blogs;

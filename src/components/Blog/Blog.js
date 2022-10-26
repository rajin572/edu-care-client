import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blogQuestion'>
            <h1>Question And Answer</h1>
            <section className="blogAnswerSection">
                <div className="card">
                    <h2>Question 1: what is cors?</h2>
                    <h3><span>Answer : </span>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</h3>
                    <p>
                    </p>
                </div>
                <div className="card">
                    <h2>Question 2: Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <h3><span>Answer : </span>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    <br />
                    <br />
                    If I don't use firebase then I will use. Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</h3>
                    <p></p>
                </div>
                <div className="card">
                    <h2>Question 3: How does the private route work?</h2>
                    <h3><span>Answer : </span>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</h3>
                    <p></p>
                </div>
                <div className="card">
                    <h2>Question 4: What is Node? How does Node work?</h2>
                    <h3><span>Answer : </span>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</h3>
                    <p></p>
                </div>
            </section> 
        </div>
    );
};

export default Blog;
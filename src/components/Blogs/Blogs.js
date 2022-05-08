import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <b className='my-4'>Question: Difference between javascript and node.js?</b>
            <p> Ans: 1.It is generally used on the client-side server.It is generally used on the server-side.</p>
            <p>2.It is an open-source, cross-platform, interpreted, lightweight scripting programming language that is used to develop dynamic and web applications.where It is a cross-platform, open-source JavaScript runtime environment that allows JavaScript to be run on the server. <br /> 3.JavaScript can be run on any engine, including Spider Monkey, V8, and JavaScript Core.JavaScript can be run on any engine, including Spider Monkey, V8, and JavaScript Core.Node JS is only supported by the V8 engine</p>
            <b className='my-2'>Question:when should use node.js and when should use mongodb?</b>
            <p>Ans:1.Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind. <br /> SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.Ju </p>
            <b className='my-2'>Question:sql vs nosql database?</b>
            <p>Ans:SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.SQL databases provide great benefits for transactional data whose structure doesn't change frequently (or at all) and where data integrity is paramount. It's also best for fast analytical queries. NoSQL databases provide much more flexibility and scalability, which lends itself to rapid development and iteration.</p>
            <b className='my-2'>Question:jwt token purposes and how does it works?</b>
            <p>Ans:JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</p>

            {/* https://stackoverflow.com/q/72159309/19066936
             */}
        </div>
    );
};

export default Blogs;
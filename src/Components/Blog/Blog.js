import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container>
                <h3>1. Difference between javascript and nodejs ?</h3>
                <p>
                Node.js is a software platform that is used to build scalable network (especially server-side) 
                applications. Node.js utilizes JavaScript as its scripting language, and achieves high throughput
                via non-blocking I/O and a single-threaded event loop.Node.js contains a built-in HTTP server library,
                 making it possible to run a web server without the use of external software, such as Apache or
                  Lighttpd, and allowing more control of how the web server works.

             JavaScript (JS) is a dynamic computer programming language . It is most commonly used as part of 
             web browsers, whose implementations allow client-side scripts to interact with the user, control 
             the browser, communicate asynchronously, and alter the document content that is has also become common
               in server-side programming, game development and the creation of desktop applications.
                </p>

                <h3>2.When should you use nodejs and when should you use mongodb?</h3>
                <p>Node is server side javascript framework. It is asynchronous and is used mainly to develop
                     REST services which can be consumed by frontend. With node both client (browser code) and
                      server both uses javascript language. There are many pre-built modules available.

                           MongoDB is a document based NoSQL database. In terms of CAP theorem it
                falls in CP, consistent and partition tolerant by default. Records are stored as Bson
                 documents in mongoDB.
                 Nodejs is asynchronous and helps to build scalable applications, whereas the most used
                  NoSQL Database Management System is MongoDB. MongoDB usually represents data as the collection
                   of documents rather than tables. This makes it easy for various types of data that can be stored
                    and accessed in the web app using Nodejs. Since it is perfect for frequently changing data, 
                    it is mostly used along with Nodejs.

                         </p>
                  <h3>3.Differences between sql and nosql databases. ?</h3>
                  <p>
                  SQL stands for Structured Query Language, used for accessing and manipulating databases.
                   We can create, retrieve, update, and delete the database. It is the standard language 
                   for relational database management systems. Common relational database management system 
                   that uses SQL are Oracle, Sybase, Access, Ingres etc.

                     NoSQL stands for Not Only SQL database. These are specially used for
                    working with large sets of distributed data. Also, NoSQL is an alternative to 
                    traditional databases in which data is placed in tables and data schema is carefully 
                    designed before building the database.
                  </p>

            </Container>
            
        </div>
    );
};

export default Blog;
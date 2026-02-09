import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import axios from "axios";

function CreatePost() {

    const initialValues = {
        title: "",
        postText: "",
        username: ""
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title required"),
        postText: Yup.string().required("You must write a message"),
        username: Yup.string().min(3, "Must be 3 characters or more").max(15, "Must be 15 characters or less").required("Username required")
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
            console.log("Create Post: " + response.statusText);
            //setListOfPosts(response.data);
            //console.log("sent post successfully");
        });
    };

    return (
        <div className="createPostPage">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="formContainer">
                <label>Title: </label>
                <ErrorMessage name="title" component='span'/>
                <Field 
                    id="inputCreatePost"
                    name="title"
                    placeholder="Title..." 
                />
                <label>Post: </label>
                <ErrorMessage name="postText" component='span'/>
                <Field 
                    id="inputCreatePost"
                    name="postText"
                    placeholder="Message..." 
                />
                <label>User: </label>
                <ErrorMessage name="username" component='span'/>
                <Field 
                    id="inputCreatePost"
                    name="username"
                    placeholder="User..." 
                />

                <button type="submit">Create Post</button>
            </Form>
        </Formik>
        </div>
    );
}

export default CreatePost

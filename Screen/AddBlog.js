import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image
} from "react-native";
import ButtonUI from '../UI/ButtonUI'
import TextInputUI from '../UI/TextInputUI'
import * as Yup from 'yup';
import { Formik } from 'formik';
import BlogService from '../Service.js/Service';
import { addBlog, updateBlog } from '../store/actions';
import { useDispatch } from 'react-redux';
import { showToastWithGravity } from '../lib/helper';
const userValidationSchema = Yup.object().shape({
    userId: Yup.string().required('Please enter user id'),
  title: Yup.string().required('Please enter title'),
  body: Yup.string().required('Please enter description')
});
export default function AddBlog(props){
const [blog, setblog] = useState(props.route.params || {
    userId: "",
      title: "",
      body:'',
      submitted: false,
  })
  useEffect(() => {
      if(props.route.params){
          let apiData=props.route.params
          const data={
            userId: apiData.userId,
            title: apiData.title,
            body:apiData.body,
          }
          setblog(data)
      }
  }, [props.route.params])

const dispatch = useDispatch()
  return (
    <View style={{ flex:1,justifyContent:'center',marginTop:150}}>
      <View style={{margin:20,flex:2}}>
      <Formik
        initialValues={blog}
        validationSchema={userValidationSchema}
        onSubmit={(value,actions)=>{
            const methodType=props.route.params ? "PUT" : "POST"
            const endPoint=props.route.params ? `/${props.route.params.id}` : ''
            BlogService.postApi(methodType,value,endPoint)
            .then(response => response.json())
            .then(json =>{
              const message=props.route.params ? "Blog Updated" : "Create Blog Successfully"
                if(props.route.params){
                    dispatch(updateBlog(json));
                }
                else{
                  showToastWithGravity("Blog deleted successfully")
                    dispatch(addBlog(json));
                }
                showToastWithGravity(message)
                actions.setSubmitting(false);
                props.navigation.navigate('BlogList')
            })
          
        }}
      >
        {(data) => (
          <>
            {props.route.params ? null :<TextInputUI label="Enter User Id" name="userId" {...data} type={'numeric'} />}
            <TextInputUI label="enter Title" name="title" {...data} />
            <TextInputUI label="enter Description" name="body" {...data} nof={4}/>
            <ButtonUI compact mode="contained" disabled={data.isSubmitting || !data.isValid} onPress={data.handleSubmit} style={{ marginTop: 20 }}>{props.route.params ? 'Upadate' : "Post"} Blog</ButtonUI>
           
          </>
        )}
      </Formik>
      </View>
    </View>
  );
}




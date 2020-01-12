import React,{useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {getUser, getUserById} from '../../lib/user/api'
import store from '../../lib/store';

const user=(props)=>{
        const [user,setUser]= useState('')
        const [loading, setLoading]=useState('')
    //     useEffect(()=>{
    //            if(props.user.data.length==0){
    //             store.dispatch(getUser())

    //            }
    //     },[])
    //     if(props.user.data.length>0){
    //         console.log(props.user.data);
    //     }
        
        
    // if(props.user.data.length==0){
    //     return (
    //         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //             <ActivityIndicator color="red" size={50}></ActivityIndicator>
    //         </View>
    //     )
    // }else{
    //     return (
    //         <View key={props.user.data.id}>
    //             {props.user.data.map((item)=>{
    //                 return(
    //                 <Text key={item.id}>{item.name}</Text>
    //                 );
    //             })}
    //         </View>
    //     )
    // }
    
    const searchUserById=(data)=>{
        store.dispatch(getUserById(data))
        if(data==''){
            setLoading('')
        }else{
            setLoading("Loading")
        }
        setUser(data);
    }
    if(props.user.data.length>0){
        console.log(props.user)
    }
    if(props.user.isLoading==true){
        return(
            <View>
            <TextInput 
            style={{height: 50, width: 200, borderWidth: 2}}
            value={user}
            onChangeText={text => searchUserById(text)}
            ></TextInput>
            <Text>{loading}</Text>
            </View>
        );
    }else{
        return(
            <View>
            <TextInput 
            style={{height: 50, width: 200, borderWidth: 2}}
            value={user}
            onChangeText={text => searchUserById(text)}
            ></TextInput>
                <Text>{props.user.data.name}</Text>
            </View>
        );
    }
   
    
}
const mapStateToProps = (state) => {
    return{
        user : state.User
    }
}
export default connect(mapStateToProps)(user);

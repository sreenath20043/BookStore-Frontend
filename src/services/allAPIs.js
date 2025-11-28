import {serverURL} from "./serverURL"
import commonAPI from "./commonAPI"

//function to call API endpoints
//1 register user
export const registerUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/register`,reqBody,{})
}

//2 login user
export const loginUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,{})
}

//3 gooogle Login user
export const GoogleloginUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/google-login`,reqBody,{})
}

//4 Add Book
export const AddBookAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/addBook`,reqBody,reqHeader)
}

//5 Get Book
export const GetBookAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/getBook`,reqBody,reqHeader)
}
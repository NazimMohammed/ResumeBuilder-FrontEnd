import { common } from "@mui/material/colors";
import commonAPI from "./commonAPI";
import server_url from "./serverUrl";

//addResumeAPI- POST
export const addResumeAPI= async(resume)=>{
    return await commonAPI('POST',`${server_url}/resume`,resume)
}

//editResumeAPI - PUT
 export const editResumeAPI= async(id,resume)=>{
    return await commonAPI('PUT',`${server_url}/resume/${id}`,resume)
}

//addDownloadHistoryAPI - POST
export const addDownloadHistoryAPI=async(resume)=>{
    return await commonAPI('POST',`${server_url}/history`,resume)
}

//getDownloadHistoryAPI - GET
export const getDownloadHistoryAPI=async()=>{
    return await commonAPI('GET',`${server_url}/history`,"")
}

// deleteDownloadHistoryAPI - DELETE
export const deleteDownloadHistoryAPI=async(id)=>{
    return await commonAPI('DELETE',`${server_url}/history/${id}`,{})
}

//getAResumeAPI 
export const getAResumeApi=async(id)=>{
    return await commonAPI('GET',`${server_url}/resume/${id}`,{})
}
// getEditResumeDetails

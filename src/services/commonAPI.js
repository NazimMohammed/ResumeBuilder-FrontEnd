import axios from 'axios'

//axios configuration
const commonAPI = async (httpMethod, url, reqBody) => {
    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody
    }
    return await axios(reqConfig).then((res => {return res}))
    .catch(err => {
        return err
    })

}
export default commonAPI


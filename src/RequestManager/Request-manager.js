const SendRequestToBackend = (Server_url,requestType, requestRoute, requestData)=>{

   if(requestType=="GET"){
   const Getdata =  fetch(Server_url+requestRoute)
    .then(response => response.json())
    .then(data => {
     //   console.log(data)
            return data
    });
      return Getdata
    
   }else if (requestType=="POST"){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
    };
  const PostData=  fetch(Server_url+requestRoute, requestOptions)
        .then(response => response.json())
        .then(data => {
  // console.log("here is response data ",data)
   return data
        });

      return PostData

   }
}


export {SendRequestToBackend}
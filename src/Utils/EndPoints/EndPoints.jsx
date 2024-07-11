const apiEndpoint = import.meta.env.DEV
? "http://localhost:8080/api"
: import.meta.env.VITE_API_ENDPOINT;



const imageSource = import.meta.env.DEV
? "http://localhost:8080/api/images"
: `${import.meta.env.VITE_API_ENDPOINT}/images`;

export {imageSource, apiEndpoint}
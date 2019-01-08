
const baseURL = 'https://graph.facebook.com/v3.2/';
const user_id = '17841401776702742';
const access_token = 'EAAFeEU2SklMBAG5YbavZAXqYuCjsZCFnHin5S5xhWUOwHuZCfFM53VvFaPPxMFcc9ZBw3donULyEfAfbuu0NuIRyn5wTD908GZByMn3TgO6ZCG3HzxZA6439AVvdT2rJyG8zFT8omLwopiWCrB13j6ky1JenPpfbKUsIV7n2Ai9pbYMbx2yVq25RPxl5kZBMOqIZD';


var XHTTP= new XMLHttpRequest();
const DONE = 4;
const STATUS = 200;


const funciones = () =>{ 

    /**
     * No utiliza
     * @param {} palabra 
     */
    const buscarIdHashtag = (palabra) =>{

        let ruta = `${baseURL}/ig_hashtag_search?access_token=${access_token}&user_id=${user_id}&q=${palabra}`;

        let promise = new Promise((resolve, reject)=>{

            XHTTP.onreadystatechange= (()=>{
                if(XHTTP.readyState === DONE){
                    (XHTTP.status === STATUS)
                        ? resolve(JSON.parse(XHTTP.responseText))
                        : reject('Error al conectar');
                }
            });

            XHTTP.open("GET",ruta);
            XHTTP.send();
        });

        return promise;

        // let response = fetch(`${baseURL}/ig_hashtag_search?access_token=${access_token}&user_id=${user_id}&q=${palabra}`)
        // let id =  response.json()
        // let comments = await this.makeCommentsList(posts.data)
        
        // return id;

    }


    const obtenerListaPosts = (idHashtag) =>{
        let ruta = `${baseURL}/${idHashtag}/recent_media?access_token=${access_token}&user_id=${user_id}&fields=id,media_type,media_url, caption, like_count, comments_count, permalink `;

        let promise = new Promise((resolve, reject)=>{

            XHTTP.onreadystatechange= (()=>{
                if(XHTTP.readyState === DONE){
                    (XHTTP.status === STATUS)
                        ? resolve(JSON.parse(XHTTP.responseText))
                        : reject('Error al conectar');
                }
            });

            XHTTP.open("GET",ruta);
            XHTTP.send();
        });

        return promise;
    }

    return {
        buscarIdHashtag,
        obtenerListaPosts
    }
}

const api = funciones();

export default api

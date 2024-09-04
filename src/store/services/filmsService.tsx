import axios from "axios";

const fetchFilms = (page: number) => {
    return axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films?page=${page}`,{
        headers: {
            'X-API-KEY': '7080b246-bd85-40ad-8fb2-dfaab16c5c23',
            'Content-Type': 'application/json',
        }
    }
    )
}

const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))

async function fetchAll() {
    let arr: any[] = []

    for (let i = 1; i < 6; i++){
        try {
            const response = await filmsService.fetchFilms(i)
            for (let el of response.data.items){
               arr.push(el)
            }
            await sleep(1000);
          } catch (error) {
            const message = "error confused";
            return message;
          }
    }
    return(arr)
}

const filmsService = {
    fetchFilms,
    fetchAll
};

export default filmsService;
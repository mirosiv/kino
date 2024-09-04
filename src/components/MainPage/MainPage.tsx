import { FC, useEffect} from "react";
import mainPage from '../MainPage/mainPage.module.css'
import FilmCard from "../FilmCard/FilmCard";
import Pagination from "./Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { fetchFilmsByPage, setFilms, setSortedFilms} from "../../store/reducers/filmsReducer";
import filmsService from "../../store/services/filmsService";
import { setNums } from "../../store/reducers/globalReducer";



const MainPage:FC = () => {

    const {items, sortedItems, itemsByPage} = useAppSelector(state => state.film)

    const dispatch = useAppDispatch()
    const {page, nums} = useAppSelector(state => state.global)

    useEffect(() => {

        dispatch(fetchFilmsByPage(page))
        filmsService.fetchAll().then((el:any) => dispatch(setFilms({items: el, itemsByPage: [], sortedItems: [], total: 0, totalPages: 0})))
        
    },[])

    useEffect(() => {

        let numsTemp = []
        if (sortedItems.length != 0){
            numsTemp = [];
            let max = Math.ceil(sortedItems.length / 20)
            for (let i = 1; i < max + 1; i++){
                numsTemp.push(i)
            }
        }else{
            numsTemp = [1,2,3,4,5]
        }
        dispatch(setNums(numsTemp))

    },[sortedItems])
  
    return(
        <div className={mainPage.main}>
            <p className={mainPage.title}>
                Топ популярных фильмов
            </p>
            <ul className={mainPage.main_ul}>
                {sortedItems?.length != 0 
                ?
                sortedItems.slice((page-1)*20, page*20).map((elem) => 
                        <li className={mainPage.main_li}>
                            <FilmCard film={elem}/>
                        </li>
                )
                :
                itemsByPage.map((elem) => 
                        <li className={mainPage.main_li}>
                            <FilmCard film={elem}/>
                        </li>
                )
                }
            </ul>
            <Pagination />
        </div>
    )
}

export default MainPage;
import { FC, useEffect, useState } from "react";
import search from "../Search/search.module.css";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useTypedSelector";
import {
  fetchFilmsByPage,
  setSortedFilms,
} from "../../../../store/reducers/filmsReducer";
import filmsService from "../../../../store/services/filmsService";
import { setPage } from "../../../../store/reducers/globalReducer";

const Search: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [temp, setTemp] = useState("")

  const { items } = useAppSelector((state) => state.film);
  const { sortedItems } = useAppSelector((state) => state.film);
  const { page } = useAppSelector((state) => state.global);

  const dispatch = useAppDispatch();

  const sortFilms = () => {
    let tempArr = [];
    let searchWord = searchQuery.toLowerCase();
    console.log(items)
    console.log(searchQuery)
    if (searchWord.length != 0) {
        for (let elem of items) {
            if (elem.nameRu?.toLowerCase().includes(searchWord)) {
              tempArr.push(elem);
            } else {
              continue;
            }
        }
        dispatch(setSortedFilms({ sortedItems: tempArr, items: items, total: 0, totalPages: 0, itemsByPage: [] }));
    }else{
        dispatch(setSortedFilms({ sortedItems: [], items: items,  total: 0, totalPages: 0, itemsByPage: [] }));
    }
  };

  useEffect(() => {
    if (page != 1){
      dispatch(setPage(1))
    }
    sortFilms()
    
  }, [searchQuery]);

  return (
    <div className={search.inp_div}>
      <input
        className={search.inp}
        placeholder="Название фильма"
        onChange={(e) => {
          {setSearchQuery(e.target.value); setTemp("temp");}
        }}
      />
    </div>
  );
};

export default Search;

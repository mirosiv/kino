import { FC, useEffect, useState } from "react";
import pagination from '../Pagination/pagination.module.css'
import { useAppDispatch, useAppSelector} from "../../../hooks/useTypedSelector";
import { setPage } from "../../../store/reducers/globalReducer";
import { fetchFilmsByPage } from "../../../store/reducers/filmsReducer";

const Pagination: FC = () => {

    const dispatch = useAppDispatch()
    const {items, sortedItems} = useAppSelector((state) => state.film)
    const {nums, page} = useAppSelector((state) => state.global)
    const [state, setState] = useState(1)

    return(
        <ul className={pagination.ul_pagination}>
            {nums.map((el) => 
                <li className={el === page ? pagination.li_pagination_active : pagination.li_pagination} onClick={() => {dispatch(setPage(el));dispatch(fetchFilmsByPage(el));setState(el)}}>
                    {el}
                </li>
            )}
        </ul>
    )
}

export default Pagination;
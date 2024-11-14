
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { itemsAction } from '../store/itemSlice';
import style from './fetchitem.module.css'
import '../index.css'
function Fetchitem() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:3001/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemsAction.addInitialitem(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <>
    <div className={style.body}>

    </div>
  </>
}
export default Fetchitem;
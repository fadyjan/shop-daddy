import { useDispatch,useSelector  } from "react-redux";
import module from "./Pagination.module.css";
import { goToNextPage, goToPreviousPage } from "../../reduxStore/store";

const Pagination = (props) => {
  const dispatch = useDispatch();
  const skip = useSelector(state => state.skip);


  return (
    <div id={module.ButtonWrapper}>
      <button
        onClick={() => {
          dispatch(goToPreviousPage());
        }}
        disabled={skip === 0 ? true : false}
      >
        Previous
      </button>
      <button
        id={module.NextBTn}
        onClick={() => {
          dispatch(goToNextPage());
        }}
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;

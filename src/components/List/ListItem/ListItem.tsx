import { postInterface } from "../../../context/post/postState";
import { useHistory } from "react-router-dom";
import style from "./ListItem.module.css";

interface PropsInterface {
  data: postInterface;
  message: string;
  goTo?: undefined | string;
}

const ListItem = ({ data: item, goTo = undefined, message }: PropsInterface) => {
  console.log(message, "ListItem");
  const history = useHistory();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, goTo: undefined | string): void => {
    if (!goTo) {
      return;
    }

    const { id: itemId } = e.currentTarget.dataset;
    const url = goTo;
    history.push(url + "/" + itemId);
  };

  return (
    <div
      onClick={(e) => handleClick(e, goTo)}
      data-id={item.id}
      className={"card border-dark my-4 " + style.card_element}
    >
      <div className='card-header bg-transparent border-dark'>Post</div>
      <div className='card-body text-dark'>
        <h5 className='card-title'>{item.title}</h5>
        <p className='card-text'>{item.body}</p>
      </div>
      <div className='card-footer bg-transparent border-success'>
        Writen by: <span className='fst-italic'>{item.user?.name}</span>
      </div>
    </div>
  );
};

export default ListItem;

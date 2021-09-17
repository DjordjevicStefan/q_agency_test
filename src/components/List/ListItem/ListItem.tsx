import { postInterface } from "../../../context/post/postState";
import { useHistory } from "react-router-dom";

interface ListProps {
  data: postInterface;
  goTo?: undefined | string;
}

const ListItem = ({ data: item, goTo = undefined }: ListProps) => {
  const history = useHistory();

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, goTo: undefined | string): void => {
    if (!goTo) {
      return;
    }

    const { id: itemId } = e.currentTarget.dataset;
    const url = goTo;
    history.push(url + "/" + itemId);
  };

  return (
    <li onClick={(e) => handleClick(e, goTo)} data-id={item.id} className=''>
      <div>{item.title}</div>
      <div>{item.body}</div>
      <div>{item.user?.name}</div>
    </li>
  );
};

export default ListItem;

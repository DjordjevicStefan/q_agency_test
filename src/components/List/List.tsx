import ListItem from "./ListItem/ListItem";
import { postInterface } from "../../context/post/postState";

interface PropsInterface {
  data: postInterface[];
  message: string;
}

const List = ({ data: items, message }: PropsInterface) => {
  console.log(message, "List");
  return (
    <div className='bg-success text-dark bg-opacity-25  row justify-content-around'>
      {items &&
        items.map((item) => {
          return <ListItem message={message} goTo={"/posts"} key={item.id} data={item} />;
        })}
    </div>
  );
};

export default List;

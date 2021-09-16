import ListItem from './ListItem/ListItem';
import { postInterface } from '../../context/post/postState';

interface ListProps {
  data: postInterface[];
}

const List  = ({ data: items } :ListProps) => {
  return (
    <div className=''>
      {items &&
        items.map((item) => {
          return (
            <ListItem goTo={'/posts'} key={item.id} data={item}/>
          );
      })}
    </div>
  );
};

export default List;

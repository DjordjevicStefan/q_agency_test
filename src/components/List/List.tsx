interface ListProps {
  data: object[];
}

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <div className=''>
      <h1>Dobrodošli</h1>
    </div>
  );
};

export default List;

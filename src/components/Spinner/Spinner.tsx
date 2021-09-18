interface PropsInterface {
  message: string;
}

const Spinner = ({ message }: PropsInterface) => {
  console.log(message + "Spinner");
  return (
    <div className='spinner-border text-success' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </div>
  );
};

export default Spinner;

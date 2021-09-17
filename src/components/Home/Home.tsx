interface PropsInterface {
  message: string;
}

const Home = ({ message }: PropsInterface) => {
  console.log(message + "Home");
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default Home;

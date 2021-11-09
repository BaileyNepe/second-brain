const HomeScreen = () => {
  const dummy = [
    { title: 'hello', isComplete: false },
    { title: 'test', isComplete: false },
  ];
  return (
    <div>
      <div>
        {dummy.map((todoItem) => (
          <div>
            <div>{todoItem.title}</div>
            <div></div>
          </div>
        ))}
      </div>
      <button className="button">+</button>
    </div>
  );
};

export default HomeScreen;

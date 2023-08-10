const RightBarItems = ({ rightItem, activeTab }) => {

  return (
    <ul>
      <li
        className={activeTab? "underline" : " "}
      >
        {rightItem}
      </li>
    </ul>
  );
};

export default RightBarItems;

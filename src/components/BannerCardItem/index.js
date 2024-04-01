// Write your code here.
import './index.css'

const Ggg = (props) => {
  const { bannerCardsLists } = props;
  const { headerText, description, className } = bannerCardsLists;
  return (
    <li className={className}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button>Show more</button>
      </div>
    </li>
  );
};

export default Ggg;
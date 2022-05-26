import { useContext } from "react";
import FavouritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const Favourites = () => {
  const favoriteCtx = useContext(FavouritesContext);

  let content;

  if (favoriteCtx.totalFavourites === 0) {
    content = <p>You got no favourites yet. Start adding some!</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favourites} />;
  }
  return (
    <section>
      <h1>Favourites page</h1>
      {content}
    </section>
  );
};

export default Favourites;

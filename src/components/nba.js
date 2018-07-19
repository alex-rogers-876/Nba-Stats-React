import React from "react";
import { observer, inject } from "mobx-react";

const Nba = inject("nba")(
  observer(({ shop }) => (
    <section className="Page-books">
      <h1>Available books</h1>
      <ol>
        {shop.sortedAvailableNba.map(book => (
          <BookEntry key={book.PLAYER_ID} book={book} />
        ))}
      </ol>
    </section>
  ))
);

const BookEntry = inject("nba")(
  observer(({ book, shop }) => (
    <li>
      <a
        href={`/team/${book.TEAM_ID}`}
        onClick={e => {
          debugger;
          e.preventDefault();
          shop.view.openTeamPage(book);
          return false;
        }}
      >
        {book.PLAYER_ID}
        <img src={book.photoUrl} />
      </a>
    </li>
  ))
);

export default Nba;

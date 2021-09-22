import { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    },
    {
      id: 2,
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    },
    {
      id: 3,
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    },
    {
      id: 4,
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
    },
    {
      id: 5,
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
    },
    {
      id: 6,
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png",
    },
    {
      id: 11,
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
    },
    {
      id: 12,
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
    },
    {
      id: 13,
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    },
    {
      id: 14,
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png",
    },
    {
      id: 15,
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
    },
    {
      id: 16,
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png",
    },
  ]);

  let myShuffle = cards;
  
  const [openCards, setOpenCards] = useState([]);
//   const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

//   // const timeout = useRef(null);



  const values = {
      cards,
      setCards,
      openCards,
      setOpenCards,
      moves,
      setMoves
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};
export default MyContext;

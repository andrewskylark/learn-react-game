import React, { useState } from 'react';

export const LikesContext = React.createContext(null);

const LikesProvider = ({ children }) => {
    const [likedCards, setLikedCards] = useState([]);
  
    return (
      <LikesContext.Provider value={{
        likedCards,
        setLikedCards: (cards) => setLikedCards(() => cards.filter((card) => card.isLike === true))
      }}>
        {children}
      </LikesContext.Provider>
    )
  }

export default LikesProvider;
import React from "react";

interface Props {
  typedWord: string;
  setTypedWord: (word: string) => void;
  tabable: number;
  textFieldRef: React.MutableRefObject<HTMLInputElement | null>;
  gameStarted: boolean;
}

function TextField({typedWord, setTypedWord, tabable, textFieldRef, gameStarted}: Props) {

  function handleClick(event: React.MouseEvent<HTMLInputElement>) {
    if(!gameStarted) {
      event.preventDefault();
    }
  }

  return <input 
          type="text" 
          id="textField" 
          tabIndex={tabable}
          ref={textFieldRef}
          value={typedWord} 
          onChange={event => { setTypedWord(event.target.value) }}
          onMouseDown={handleClick}
  />;
}

export default TextField;
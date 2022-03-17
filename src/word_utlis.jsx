import React from 'react';
import word_bank from './word_bank.json' ;

function word_utlis() {
const randomIndex = Math.floor(Math.random()*word_bank.length);
return word_bank[randomIndex];
}

export default word_utlis;

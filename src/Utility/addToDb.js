const getStoreCard = () => {
   const storeCardSTR = localStorage.getItem('cardList');
   if(storeCardSTR){
    const  storeCardData = JSON.parse(storeCardSTR);
    return storeCardData;
   }
   else{
    return [];
   }
}

const addToStoreDb = id => {
    const storeCardData = getStoreCard();

    if(storeCardData.includes(id)){
        return;
    }
    else{
        storeCardData.push(id);
        const data = JSON.stringify(storeCardData);
        localStorage.setItem('cardList', data);
    }

}
//remove localStorage id:
const removeIntoDb = (id) =>{
    const store = getStoreCard();
    const update = store.filter(cardId => parseInt(cardId) !== id);
    localStorage.setItem('cardList', JSON.stringify(update));
}
// save install id:
const saveInsallId = (id) => {
    const store = localStorage.getItem('cardList');
    const condition = store ? JSON.parse(store) : [];
    if(!condition.includes(id)){
        condition.push(id);
        localStorage.setItem('cardList', JSON.stringify(condition));
    }
}

export {addToStoreDb, getStoreCard, removeIntoDb, saveInsallId};
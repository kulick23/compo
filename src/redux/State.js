import { renderEntireTree } from "../render";
let state = {
    totalPrice: 0,
};

export let updateTotalPrice = (newPrice) => {
    state.totalPrice += newPrice;
    renderEntireTree();
};
export let getTotalPrice = () => {
    return state.totalPrice;
};
export default state;


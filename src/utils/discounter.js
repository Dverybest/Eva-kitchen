export const discounter = (amount, discount) => {
    if (!discount) return Number(amount);
    return Number(amount) - (Number(discount) / 100) * Number(amount);
};
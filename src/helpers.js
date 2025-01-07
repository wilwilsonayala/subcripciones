export const moneyFormat= amount => {
    return  amount.toLocaleString('en-BO',{
        style:'currency',
        currency:'BOB'
    })
}
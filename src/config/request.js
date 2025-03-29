// https://functions.chain.link/playground

const id = 0; // args[0];
const priceResponse = await Functions.makeHttpRequest({
    url: `https://api.chateau.voyage/house/${id}`,
});

if (priceResponse.error) {
    throw Error('Housing Price Request Error');
}

const price = priceResponse.data.latestValue;
// @ts-ignore
return Functions.encodeString(price);
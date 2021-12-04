export function userListTransform(data) {
    // Transfor the address in a single line sentence and delete all existing address properties except geo
    return data.map(item => {
        if (item.address) {
            item.address = {
                sentence: `${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`,
                geo: item.address.geo
            }
        }
        return item;
    });
}
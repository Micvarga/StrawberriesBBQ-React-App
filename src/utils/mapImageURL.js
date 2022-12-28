


export const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: require("../app/assets/img/" + item.image)
        };
    });
};

// export const mapCarouselImageURL = (arr) => {
//     return arr.map((item) => {
//         return {
//             ...item,
//             src: baseUrl + item.src
//         };
//     });
// };


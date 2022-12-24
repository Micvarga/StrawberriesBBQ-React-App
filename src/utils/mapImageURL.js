import { baseUrl } from "../app/shared/baseUrl";


export const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: baseUrl + item.image
        };
    });
};

export const mapCarouselImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            src: baseUrl + item.src
        };
    });
};


import { createGlobalStyle } from 'styled-components';

import circularsp from '../assets/Circular Font Family/Gotham-Black.otf';
import productSans from '../assets/Circular Font Family/ProductSans-Black.ttf';
import glory from '../assets/Circular Font Family/Gilroy-Bold.ttf';
import gotham from '../assets/Circular Font Family/GothamBook.ttf';
export default createGlobalStyle`
    @font-face {
        font-family: 'product-sans';
        src: local('product-sans'), local('product-sans'),
        url(${productSans}) format('woff2'),
        url(${productSans}) format('woff');
        font-weight: 900;
        font-style: normal;
    }
    @font-face {
        font-family: 'circular-sp';
        src: local('product-sans'), local('circular-sp'),
        url(${circularsp}) format('woff2'),
        url(${circularsp}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'glory-font';
        src: local('glory'), local('glory'),
        url(${glory}) format('woff2'),
        url(${glory}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'gotham';
        src: local('gotham'), local('gotham'),
        url(${gotham}) format('woff2'),
        url(${gotham}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

`;
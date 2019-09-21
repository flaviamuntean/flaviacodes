import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["a full-stack developer building products that make a difference"],
    typeSpeed: 60,
    loop: true
  });
}

export { loadDynamicBannerText };

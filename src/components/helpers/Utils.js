export default {
  preloadImage: (src) => {
    return new Promise( (resolve, reject) => {
      let img = new Image();

      img.onload = () => {
        resolve(img);
      }

      img.error = () => {
        reject(img);
      }

      img.src= src;
    });
  },

  display: {
    pixelratio: window.devicePixelRatio
  }
}

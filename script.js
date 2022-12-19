const changeMode = () => {
  let mybody = document.body;
  mybody.classList.toggle('mydark')
}

const popup = document.querySelector('.Coupon-main-div');
        const x = document.querySelector('.Coupon-block p')

        window.addEventListener('load', () => {
            popup.classList.add('showPopup');
            popup.childNodes[1].classList.add('showPopup');
        })
        x.addEventListener('click', () => {
            popup.classList.remove('showPopup');
            popup.childNodes[1].classList.remove('showPopup');
        })


const successCallback = (position) => {
    console.log(position);
};

const errorCallback = (error) => {
    console.error(error);
};


navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
    enableHighAccuracy: true,
    timeout: 5000,
});

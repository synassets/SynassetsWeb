import store from "@/store";

(function (window, document){
    const win = document.documentElement
    const setRemUnit = () => {
        const devW = win.clientWidth>1920?1920:win.clientWidth;
        if(devW > 750) {
            win.style.fontSize = '75px';
            store.commit('SET_IS_MOBILE', false);
        }else {
            win.style.fontSize = devW/10 + 'px';
            store.commit('SET_IS_MOBILE', true);
        }

    }
    setRemUnit();
    window.addEventListener('resize', setRemUnit);
}(window, document))


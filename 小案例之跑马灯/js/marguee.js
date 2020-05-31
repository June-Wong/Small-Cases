/*
 * css:设置元素行内样式
 *    setOneCss:@params:当前元素，要设置的属性，要设置的属性值
 *    setGroupCss:@params:当前元素,{要设置的属性:要设置的属性值,...}
 *    setCss:setOneCss/setGroupCss
 */
let css = (function () {
    let setOneCss = function (curEle, attr, value) {
        if (!isNaN(value)) { //eg:div,width,150
            let reg = /^(width|height|fontSize|((margin|padding)?(top|left|right|bottom)?))$/i;
            reg.test(attr) ? value += 'px' : null;
        }
        curEle['style'][attr] = value;
    }

    let setGroupCss = function (curEle, options = {}) {
        for (let key in options) {
            if (!options.hasOwnProperty(key)) return;
            setOneCss(curEle, key, options[key]);
        }
    }

    let setCss = function (...arg) {
        if (arg.length === 2)
            setGroupCss(...arg);
        setOneCss(...arg);
        return;
    }
    return {
        setCss
    }
})();


let wrapper = document.querySelector('.wrapper');
/* css.setCss(wrapper, {
    left: -10
}); */
wrapper.innerHTML += wrapper.innerHTML;
css.setCss(wrapper, 'width', parseFloat(window.getComputedStyle(wrapper, null)['width']) * 2);


setInterval(() => {
    let wrapperLeft = parseFloat(window.getComputedStyle(wrapper, null)['left']);
    wrapperLeft -=4;
    css.setCss(wrapper, {
        left: wrapperLeft
    });
    if (Math.abs(wrapper.offsetLeft) >= parseFloat(window.getComputedStyle(wrapper, null)['width']) / 2) {
        css.setCss(wrapper, {
            left: 0
        });
    }
}, 15);
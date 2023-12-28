// FONCTIONS 
// dédiées à la doc uniquement
const doc_only = {
    // https://stackoverflow.com/a/3627747
    rgba2hex: (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`,
    update: function() {
        document.querySelectorAll('.briks-colors [class*="m-bc"]').forEach(function(el) {
            const rgb_value = getComputedStyle(el).backgroundColor;
            const hex_value = doc_only.rgba2hex(rgb_value);
            el.nextElementSibling.querySelector('span').innerHTML = hex_value + ' | ' + rgb_value;
        });
        document.querySelectorAll('.briks-font-families p').forEach(function(el) {
            const raw_value = getComputedStyle(el).fontFamily;
            const raw_value2 = getComputedStyle(el).fontWeight;
            el.querySelector('span').innerHTML = raw_value + ' | ' + raw_value2;
        });
        document.querySelectorAll('.briks-font-sizes p.c-txt').forEach(function(el) {
            const raw_value = getComputedStyle(el).fontSize;
            el.querySelector('span').innerHTML = raw_value;
        });
        document.querySelectorAll('.briks-spacings [class*="m-pt-"]').forEach(function(el) {
            const raw_value = getComputedStyle(el).paddingTop;
            el.querySelector('span').innerHTML = raw_value;
        });
        document.querySelectorAll('.briks-border-radius [class*="m-bradtl-"]').forEach(function(el) {
            const raw_value = getComputedStyle(el).borderTopLeftRadius;
            el.querySelector('span').innerHTML = raw_value;
        });
        document.querySelectorAll('.briks-shadows [class*="m-bs-"]').forEach(function(el) {
            const raw_value = getComputedStyle(el).boxShadow;
            el.querySelector('span').innerHTML = raw_value;
        });
    }
};

window.addEventListener('load', function() {
    doc_only.update();
})
function match(selector, element) {
    const selectors = selecotr.split(' ').reverse();
    for(selector of selectors){
        const allSelectors = getSelectors(selector);
        for (let a of allSelectors) {
            if(a.startsWith('.') && element.className === a.replace('.', '')){
                return true;
            }
            if(a.startsWith('#') && element.id === a.replace('#', '')){
                return true;
            }
        }
    }
    return false;
}

function getSelectors(str){
    let classList = str
    .split('.')
    .map((item, index) => {
        if(index !==0){
            item = '.' + item;
        }
        return item;
    })
    .filter((item) => item);
    let otherSelectors = classList.shift();
    let idList = otherSelectors
    .split('#')
    .map((item, index) => {
        if(index !==0){
            item = '#' + item;
        }
        return item;
    })
    .filter((item) => item);
    return classList.concat(idList);
}

match('div #id.class', document.getElementById('id'));
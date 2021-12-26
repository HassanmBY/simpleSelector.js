var $ = selector => {
    let nodeList = document.querySelectorAll(selector);

    let methods = {
        // DOCUMENT
        ready: callback => {
            document.readyState != "loading" ?
                callback() :
                document.addEventListener("DOMContentLoaded", callback);
        },
        // CONSOLE
        log: () => {
            console.log(nodeList[0]);
        },
        logList: () => {
            for (node of nodeList) {
                console.log(node);
            }
        },
        logNode: () => {
            console.log(nodeList);

        },
        logCompStyle: () => {
            for (node of nodeList) {
                console.log(getComputedStyle(node));
            }
        },
        // HTML
        text: input => {
            for (node of nodeList) {
                node.textContent = input;
            }
        },
        html: input => {
            for (node of nodeList) {
                node.innerHTML = input;
            }
        },
        addHtml: input => {
            for (node of nodeList) {
                node.innerHTML += input;
            }
        },
        append: input => {
            for (node of nodeList) {
                node.appendChild(input);
            }
        },
        // CSS
        css: arg => {
            if (typeof arg == "object") {
                for (node of nodeList) {
                    for (const key in arg) {
                        node.style[key] = arg[key];
                    }
                }
            } else {
                for (node of nodeList) return (`${arg}: ${node.style[arg] || 'Not defined'}`);
            }


        },
        hide: () => {
            for (node of nodeList) {
                node.style.display = 'none';
                node.style.visibility = 'hidden';
            }
        },
        show: () => {
            for (node of nodeList) {
                node.tagName == 'LI' | 'li' ?
                    node.style.display = 'list-item' :
                    node.style.display = 'block';
                node.style.visibility = 'visible';
            }
        },
        hideShow: () => {
            for (node of nodeList) {
                getComputedStyle(node).display == "none" ? $(selector).show() : $(selector).hide();
            }

        },

        addClass: className => {
            for (node of nodeList) {
                node.classList.add(className);
            }

        },
        removeClass: className => {
            for (node of nodeList) {
                node.classList.remove(className);
            }

        },
        toggleClass: className => {
            for (node of nodeList) {
                node.classList.toggle(className);
            }

        },
        replaceClass: (oldClassName, newClassName) => {
            for (node of nodeList) {
                node.classList.replace(oldClassName, newClassName);
            }

        },
        classList: elem => {
            for (node of nodeList) {
                return node.classList;
            }
        },
        hasClass: className => {
            for (node of nodeList) {
                return node.classList.contains(className);
            }
        },

        // EVENT LISTENERS
        click: fct => {
            for (node of nodeList) {
                node.addEventListener('click', fct);
            }
        },

        // AJAX

        ajax: (url, options, responseFct, dataFct, catchFct) => {
            return fetch(url, options)
                .then(responseFct)
                .then(dataFct)
                .catch(catchFct)
                /*
                Base Catch Example: err => { console.error('Error:', err)}
                */
        },

        // BUFFER ??
        create: (elemTag, className, content, idName) => {
            let elem = document.createElement(elemTag);
            className && (elem.classList.add(className))
            idName && (elem.setAttribute('id', idName));
            content && (elem.textContent = content);
            return elem;
        }
    }

    return nodeList && methods || nodeList || methods
}
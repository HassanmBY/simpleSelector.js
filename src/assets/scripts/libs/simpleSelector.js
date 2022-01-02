const attach = (nodeList) => {
    // DOCUMENT
    nodeList.ready = callback => {
        document.readyState != "loading" ?
            callback() :
            document.addEventListener("DOMContentLoaded", callback);
    }

    // CONSOLE
    nodeList.log = () => {
        console.log(nodeList[0]);
    }
    nodeList.logList = () => {
        for (node of nodeList) console.log(node);

    }
    nodeList.logNode = () => {
        console.log(nodeList);

    }
    nodeList.logCompStyle = () => {
        for (node of nodeList) console.log(getComputedStyle(node));
    }

    // HTML
    nodeList.text = input => {
        for (node of nodeList) node.textContent = input;
    }
    nodeList.html = input => {
        for (node of nodeList) node.innerHTML = input;
    }
    nodeList.addHtml = input => {
        for (node of nodeList) node.innerHTML += input;
    }
    nodeList.append = input => {
        for (node of nodeList) node.appendChild(input);
    }

    // CSS
    nodeList.css = (...args) => {
        if (typeof args[0] == "object" && args.length == 1)
            for (node of nodeList)
                for (const o of args)
                    for (const args in o) node.style[args] = o[args];
        else if (typeof args[0] == "string" && typeof args[1] == "string" && args.length == 2)
            for (node of nodeList) node.style[args[0]] = args[1];
        else if ("string" == typeof args[0] && 1 == args.length)
            for (node of nodeList) return `${args}: ${window.getComputedStyle(node)[args]||"Not defined"}`
    }
    nodeList.hide = () => {
        for (node of nodeList) {
            node.style.display = 'none';
            node.style.visibility = 'hidden';
        }
    }
    nodeList.show = () => {
        for (node of nodeList) {
            node.tagName == 'LI' | 'li' ?
                node.style.display = 'list-item' :
                node.style.display = 'block';
            node.style.visibility = 'visible';
        }
    }
    nodeList.hideShow = () => {
        for (node of nodeList)
            if (getComputedStyle(node).display == "none") {
                node.tagName == 'LI' | 'li' ?
                    node.style.display = 'list-item' :
                    node.style.display = 'block';
                node.style.visibility = 'visible';
            } else {
                node.style.display = 'none';
                node.style.visibility = 'hidden';
            }
    }
    nodeList.addClass = className => {
        for (node of nodeList) node.classList.add(className);
    }
    nodeList.removeClass = className => {
        for (node of nodeList) node.classList.remove(className);
    }
    nodeList.toggleClass = className => {
        for (node of nodeList) node.classList.toggle(className);
    }
    nodeList.replaceClass = (oldClassName, newClassName) => {
        for (node of nodeList) node.classList.replace(oldClassName, newClassName);
    }
    nodeList.classList = () => {
        for (node of nodeList) return node.classList;
    }
    nodeList.hasClass = className => {
        for (node of nodeList) return node.classList.contains(className);
    }

    // EVENT LISTENERS
    nodeList.click = fct => {
        for (node of nodeList) node.addEventListener('click', fct);
    }

    nodeList.on = (listener, fct) => {
        for (node of nodeList) node.addEventListener(listener, fct)
    }

    nodeList.hover = (over, out) => {
        for (node of nodeList) node.addEventListener('mouseover', over), node.addEventListener('mouseout', out);
    }

    // Custom fct on any selector
    nodeList.each = callback => {
        // NOTE: only use "function" keyword with this method, no arrow fct because of .bind method when using µ(this) selector !!!
        for ([i, elem] of nodeList.entries()) {
            const boundFn = callback.bind(elem);
            boundFn(i, elem);
        }
    }
}
const µ = (...args) => {
    if (typeof args[0] === 'function') {
        const readyFn = args[0];
        document.addEventListener('DOMContentLoaded', readyFn);
    } else if (typeof args[0] === 'string') {
        let selector = args[0]
        let nodeList = document.querySelectorAll(selector);
        attach(nodeList);

        return nodeList

    } else if (args[0] instanceof HTMLElement) {
        let element = [args[0]];
        attach(element)
        return element;

    } else if (typeof args[0] === 'undefined') {
        // BUFFER ??
        let doc = document
        doc.create = (elemTag, className, content, idName) => {
            let elem = document.createElement(elemTag);
            className && (elem.classList.add(className))
            idName && (elem.setAttribute('id', idName));
            content && (elem.textContent = content);
            return elem;
        }

        // AJAX

        doc.ajax = (url, options, responseFct, dataFct, catchFct) => {
            return fetch(url, options)
                .then(responseFct)
                .then(dataFct)
                .catch(catchFct)
                /*
                Base Catch Example: err => { console.error('Error:', err)}
                */
        }
        return doc;
    }

}
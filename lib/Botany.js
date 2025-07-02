class Botany {
    static generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = Math.random() * 16 | 0;
            let v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    static create(element_type, {innerHTML="", id="", classes=[], type="", name="", value="", checked=false, placeholder="", src="", width="", height="", alt="", href="", target="", children=[], eventListeners=[]}) {
        let element = document.createElement(element_type);
        element.innerHTML = innerHTML;
        if (id.length > 0) {
            element.id = id;
        }
        element.placeholder = placeholder;
        if (type.length > 0) {
            element.type = type;
        }
        if (name.length > 0) {
            element.name = name;
        }
        element.value = value;
        element.src = src;
        if (element_type === "img" && width.length > 0) {
            element.style.width = width;
        }
        if (element_type === "img" && height.length > 0) {
            element.style.height = height;
        }
        if (element_type === "img") {
            element.alt = alt;
        }
        element.href = href;
        element.target = target;
        if (element_type == "input" && type == "checkbox") {
            element.checked = (checked === true || checked === "true" ? true : false);
        }
        classes.forEach((class_name) => {
            element.classList.add(class_name);
        });
        children.forEach((child) => {
            element.appendChild(child);
        });
        eventListeners.forEach((eventListener) => {
            element.addEventListener(eventListener.event, eventListener.handler)
        });
        return element;
    }

    static div({innerHTML="", id="", classes=[], children=[]}) {
        return this.create("div", {innerHTML: innerHTML, id: id, classes: classes, children: children});
    }

    static span({innerHTML="", id="", classes=[], eventListeners=[]}) {
        return this.create("span", {innerHTML: innerHTML, id: id, classes: classes, eventListeners: eventListeners});
    }

    static p({innerHTML="", id="", classes=[], children=[]}) {
        return this.create("p", {innerHTML: innerHTML, id: id, classes: classes, children: children});
    }

    static a({innerHTML="", id="", classes=[], href="", target="_blank", children=[]}) {
        return this.create("a", {innerHTML: innerHTML, id: id, classes: classes, href: href, target: target, children: children});
    }

    static h1({innerHTML="", id="", classes=[], children=[]}) {
        return this.create("h1", {innerHTML: innerHTML, id: id, classes: classes, children: children});
    }
    
    static h2({innerHTML="", id="", classes=[], children=[]}) {
        return this.create("h2", {innerHTML: innerHTML, id: id, classes: classes, children: children});
    }
    
    static h3({innerHTML="", id="", classes=[], children=[]}) {
        return this.create("h3", {innerHTML: innerHTML, id: id, classes: classes, children: children});
    }
    
    static h4({innerHTML="", id="", classes=[], children=[]}) {
        return this.create("h4", {innerHTML: innerHTML, id: id, classes: classes, children: children});
    }
    
    static h5({innerHTML="", id="", classes=[], children=[]}) {
        return this.create("h5", {innerHTML: innerHTML, id: id, classes: classes, children: children});
    }
    
    static h6({innerHTML="", id="", classes=[], children=[]}) {
        return this.create("h6", {innerHTML: innerHTML, id: id, classes: classes, children: children});
    }

    static input({innerHTML="", id="", classes=[], type="", value="", checked=false, children=[], eventListeners=[]}) {
        return this.create("input", {innerHTML: innerHTML, id: id, classes: classes, type: type, value: value, checked: checked, children: children, eventListeners: eventListeners});
    }

    static button({innerHTML="", id="", classes=[], children=[], eventListeners=[]}) {
        return this.create("button", {innerHTML: innerHTML, id: id, classes: classes, children: children, eventListeners: eventListeners});
    }

    static select({innerHTML="", id="", classes=[], name=""}) {
        return this.create("select", {innerHTML: innerHTML, id: id, classes: classes, name: name});
    }

    static option({innerHTML="", id="", classes=[], value=""}) {
        return this.create("option", {innerHTML: innerHTML, id: id, classes: classes, value: value});
    }

    static img({id="", classes=[], src="", width="", height="", alt=""}) {
        return this.create("img", {id: id, classes: classes, src: src, width: width, height: height, alt: alt});
    }
}

class Plant {
    constructor(root) {
        this.plant_id = Botany.generateUUID();
        this.root = root;

        this.current_stem_id = 0;
        this.stems = new Map();
    }

    grow(stem) {
        this.current_stem_id += 1;

        stem.graft(this.root);
        let stem_id = this.plant_id + "#" + this.current_stem_id;
        this.stems.set(stem_id, stem);
        stem.render();
        return stem_id;
    }
}

class Stem {
    constructor(attributes={}) {
        this.node = null;
        //this.attributes = new Map(attributes);
        this.attributes = attributes;
    }

    graft(node) {
        this.node = node;
    }

    prepare() {
        return null;
    }

    setAttribute(attribute, value) {
        //this.attributes.set(attribute, value);
        this.attributes[attribute] = value;
    }

    render() {
        let element = this.prepare();
        if (element == null) {
            return;
        }

        this.node.appendChild(element);
    }
}

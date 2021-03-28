window.dom = {

    find(selector,scope){
        return (scope || document).querySelector(selector)
    },
    findAll(selector,scope){
        return (scope || document).querySelectorAll(selector)
    },
    style(node,name,value){
        let as = arguments.length
         if(as === 3){
            return node.style[name] = value
         }else if(as === 2) {
            // get
             if(typeof name === 'string'){
                 return node.style[name]
             }else if(name instanceof  Object ) {
                 let obj
                 for(k in obj) {
                     node.style[key] = obj[key]
                 }
             }


        }
    },
    each(nodeList,fn){
        for (let i = 0 ;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }

    },

    ////////////////////////////////////

    create(string){
        const container = document.createElement('template')
        container.innerHTML = string.trim()
        return container.content.firstChild
    },


    after(node,newNode){
        return  node.parentNode.insertBefore(newNode,node.nextSibling)
        // return  node.parentNode.insertBefore(newNode,null) // null 插入到最后
    },
    before(node,newNode){
      return   node.parentNode.insertBefore(newNode,node)
    },
    append(parent,node){
       return  parent.appendChild(node)
    },
    // 新增爸爸
    wrap(node,parentNode){
        this.before(node,parentNode)
        this.append(parentNode,node)
    },
    remove(node){
        node.parentNode.removeChild(node)
        return node
    },
    empty(node){
        const arr = []
        let x = node.firstChild
        while (x){
            arr.push(dom.remove(node.firstChild))
            x= node.firstChild
        }
        return arr
    },
    attr(node,name,value){
        let al = arguments.length
        if(al === 3){
            return node.setAttribute(name,value)
        }else if(al === 2){
            return  node.getAttribute(name)
        }
    },
    text(node,string){
        let has = 'innerText' in  node
        let l = arguments.length
        if(l === 2) {
            has ? node.innerText = string : node.textContent = string
        }else if(l === 1) {
           return  has ? node.innerText : node.textContent
        }
    },

    html(node,stirng){
        let al = arguments.length
        if(al === 2) {
            node.innerHTML = stirng
        } else if(al === 1) {
            return node.innerHTML

        }
    },
    class : {
      add(node,className){
          node.classList.add(className)
      },
      remove(node,className){
          node.classList.remove(className)
      },
      has(node,className){
          node.classList.contains(className)
      }
    },

    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    off(node,eventName){
        node.removeEventListener(eventName)
    },
    parent(node){
        return node.parentNode
    },
    chilren(node){
        return node.children
    },
    next(node){
        let n = node.nextSibling
        while(n && n.nodeType !== 1){
            n  = n.nextSibling
        }
        return n
    },
    previous(node){
        let p  =  node.previousSibling
        while (p && p.nodeType !==1) {
            p  = p.previousSibling
        }
        return p

    },

    index(node){
        let cs =  node.parentNode.children
        let i
        for(i = 0; i< cs.length;i ++ ) {
            if (cs[i] === node){
                break
            }

        }
        return i

    }




}

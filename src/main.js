let div  = dom.create(`<div id="div"></div>`)

let container  = dom.find('#container')
dom.append(container,div)

let rm  = dom.find('#rm')
dom.remove(rm)

let div1  = dom.create(`<div id="div1">div1</div>`)
dom.before(div,div1)
let div2  = dom.create(`<div id="div2"></div>`)
dom.after(div,div2)

let div2Parent  = dom.create(`<div id="div2Parent"></div>`)
dom.wrap(div2,div2Parent)

let text = dom.find('#text')

console.log('text=' + dom.text(text))
dom.text(text,'poiu')


console.log('chilren='+dom.chilren(container))

console.log(dom.attr(text,'style'))
dom.attr(text,'style','color:blue')

let html = dom.find('#html')
dom.html(html,'<p>你好</p>')
console.log(dom.html(html))



console.log(dom.next(div1))
console.log(dom.previous(div))

console.log(dom.index(div1))

console.log(dom.style(text,'color'))
dom.style(text,'color','brown')

dom.each(container.children,(c)=>{
    console.log(c)
})

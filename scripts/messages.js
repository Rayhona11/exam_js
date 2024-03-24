// WEB SOCCED 

let ws = new WebSocket('wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self')
let btn = document.querySelector('button')
let inp = document.querySelector('input')
let ul = document.querySelector('ul')
let container = document.querySelector('.container')
let p = document.querySelector('p')
let moreComment = document.querySelector('.more-comments')
let more = document.querySelector('.more')


ws.onopen = (e) => { 
    console.log(e, 'opened');
}
ws.onerror = (e) => {
    console.log('ulanishda xatolik');
}
ws.onmessage = (e) => {
    console.log(e.data);
    let m = JSON.parse(e.data)
    messages.push(m)
    render(messages)
}

let messages = []

function render(messes) {
    ul.innerHTML = ''
    messes.forEach(m => {
        let li = document.createElement('li')
        li.innerHTML = `
          <i>${m.text}</i><br>
          <i><b>${m.writer}</b></i>
        `
        ul.append(li)
    });
}
btn.addEventListener('click', () => {
    let mess = {
        writer: "Mirzoyeva Rayhona",
        text: inp.value,
    }
    ws.send(JSON.stringify(mess))
    messages.push(mess)
    render(messages)
})
ws.onclose = () => {
    console.log('tarmoqdan uzilish');
}

// EVENTS

moreComment.addEventListener('click',()=>{
   more.style.display = "block"
   more.style.padding = "20px"
})





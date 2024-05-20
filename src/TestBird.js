import PiComponent from 'pyllar/component';

export default class TestBird extends PiComponent { 
    view = /*html*/`<div> Bird Test <button @click="clickme()">ClickMe</button></div>`;

    clickme() {
        console.log('Funcionalidade não implementada aina');
        alert('Funcionalidade não implementada aina');
    }
};
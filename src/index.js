import '@babel/polyfill'
import ko from 'knockout'
import './components/bot.js'
import './style.css'
import config from './config.js'

class DummyIndexViewModel {
}
ko.applyBindings({ title: config.static_message.title }, document.getElementById("htmlHeader"));
ko.applyBindings(new DummyIndexViewModel(), document.getElementById('app'))

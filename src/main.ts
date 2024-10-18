import { Tween } from '../core/tween';
import { Line } from './line';
import './style.css'

const wrapper = document.querySelector('.l-wrapper') as HTMLElement;

const num = 20
for (let i = 0; i < num; i++) {
  const el = document.createElement('div')
  el.classList.add('l-line')
  wrapper.appendChild(el)

  const line = new Line({
    el: el,
  }, i == num - 1)
  line.show(1 + i * 0.1)

  Tween.set(el, {
    color: i < 4 ? '#fff' : '#ffff00'
  })
}
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {

  }

  initialize() {
    this.isDragging = false
    this.xOffset = 0
    this.yOffset = 0
  }

  mousedown(event) {
    this.isDragging = true

    this.initialX = event.clientX - this.xOffset
    this.initialY = event.clientY - this.yOffset
    this.element.querySelector('#drag-box').classList.add('glow')
    this.element.querySelector('#drag-box').style.transform = `translate(${this.xOffset}px, ${this.yOffset}px) scale(0.9)`
  }

  mouseup(event) {
    this.isDragging = false
    this.element.querySelector('#drag-box').classList.remove('glow')
    this.element.querySelector('#drag-box').style.transform = `translate(${this.xOffset}px, ${this.yOffset}px)`


    if (event.target.id === 'trash-can') {
      this.element.querySelector('#drag-box').style.display = 'none'
      this.element.querySelector('#trash-can').innerHTML = 'Item Trashed'
    } else {
      this.element.querySelector('#trash-can').innerHTML = 'Trash Can Is Closed'
    }
  }

  mousemove(event) {
    if (this.isDragging === false) {
      return
    }

    this.xOffset = event.clientX - this.initialX
    this.yOffset = event.clientY - this.initialY

    this.element.querySelector('#drag-box').style.transform = `translate(${this.xOffset}px, ${this.yOffset}px) scale(0.9)`
  }

  mouseover(event) {
    this.element.querySelector('#trash-can').innerHTML = 'Trash Can Is Open'
  }
}
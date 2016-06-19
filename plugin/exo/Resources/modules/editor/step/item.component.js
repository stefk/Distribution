import angular from 'angular/index'
import {controller} from './../store'
import template from './item.component.html'

angular
  .module('editor')
  .component('item', {
    template,
    controller,
    bindings: {
      data: '<'
    }
  })

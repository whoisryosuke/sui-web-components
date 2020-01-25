import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sui-base',
  styleUrl: 'base.css',
  shadow: true
})
export class Base {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ameh-container',
  styleUrl: 'ameh-container.css',
  shadow: false,
  scoped: true
})
export class AmehContainer {

  render() {
    return (
      <Host class="custom-scrollbar">
        <slot></slot>
      </Host>
    );
  }

}

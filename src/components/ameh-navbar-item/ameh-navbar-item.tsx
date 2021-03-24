import { Component, Element, Host, h, Prop } from '@stencil/core';
import { applyTheme } from '../../utils/utils';

@Component({
  tag: 'ameh-navbar-item',
  styleUrl: 'ameh-navbar-item.css',
  shadow: true,
})
export class AmehNavbarItem {
  @Element() el!: HTMLElement;

  @Prop() theme: 'light' | 'dark' | 'auto' = 'auto';

  componentDidLoad() {
    applyTheme(this.el, this.theme);
  }
  
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

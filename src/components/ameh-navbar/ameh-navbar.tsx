import { Component, Element, Host, h, Prop } from '@stencil/core';
import { applyTheme } from '../../utils/utils';

@Component({
  tag: 'ameh-navbar',
  styleUrl: 'ameh-navbar.css',
  shadow: true,
})
export class AmehNavbar {
  @Element() el!: HTMLElement;

  @Prop() theme: 'light' | 'dark' | 'auto' = 'auto';

  @Prop() placement: 'fixed-top' | 'fixed-bottom' | 'sticky-top' = 'fixed-top';

  componentDidLoad() {
    applyTheme(this.el, this.theme);

    if (this.placement === 'fixed-top') {
      this.el.parentElement.style.paddingTop = `${this.el.getBoundingClientRect().height}px`;
    } else if (this.placement === 'fixed-bottom') {
      this.el.parentElement.style.paddingBottom = `${this.el.getBoundingClientRect().height}px`;
    }
  }

  private onToggleClick = (e: Event) => {
    this.collapsableContent.classList.toggle('show');
  }

  private get collapsableContent(): HTMLDivElement {
    return this.el.shadowRoot.querySelector('.collapsable-content');
  }

  render() {
    return (
      <Host class={this.placement} role="navigation">
        <div class="expanded-content">
          <div class="brand">
            <slot name="brand"></slot>
          </div>
          <button class="toggler" onClick={this.onToggleClick}>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
        <div class="collapsable-content">
          <slot></slot>
        </div> 
      </Host>
    );
  }

}

import { Component, Element, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ameh-btn',
  styleUrl: 'ameh-btn.css',
  shadow: true,
})
export class AmehBtn {
  @Element() el!: HTMLElement;

  @Prop() color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @Prop() theme: 'light' | 'dark' | 'auto' = 'auto';

  @Prop() type: 'button' | 'reset' | 'submit' = 'button';

  @Prop() outline: boolean = false;

  componentDidLoad() {
    if (this.theme === 'dark' || (this.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.el.classList.add('dark');
    }
  }

  render() {
    return (
      <Host>
        <button type={this.type} class={{
          'btn': true,
          'btn-outline': this.outline,
          'btn-primary': this.color === 'primary',
          'btn-secondary': this.color === 'secondary',
          'btn-tertiary': this.color === 'tertiary'
        }}>
          <slot></slot>
        </button>
      </Host>
    );
  }

}

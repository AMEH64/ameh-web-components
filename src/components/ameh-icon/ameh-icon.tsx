import { Component, getAssetPath, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ameh-icon',
  styleUrl: 'ameh-icon.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class AmehIcon {
  @Prop() icon!: string;

  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  render() {
    return (
      <Host class={this.size}>
        <svg class={this.size} fill="currentColor">
          <use xlinkHref={`${getAssetPath('./assets/bootstrap-icons.svg')}#${this.icon}`}/>
        </svg>
      </Host>
    );
  }

}

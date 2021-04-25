import { Component, h, Host, Prop } from '@stencil/core';
import { PlanetButtonSeverity } from './planet-button-severity.enum';

@Component({
  tag: 'planet-button',
  styleUrl: 'planet-button.css',
  shadow: true,
})
export class PlanetButton {
  @Prop() disabled: boolean;
  @Prop() form: string;
  @Prop() full: boolean;
  @Prop() severity: 'error' | 'success';
  @Prop() size: 'mini' | 'large' | 'sm' | 'xs' | 'md' | 'lg' = 'large';
  @Prop() pTabIndex: number;
  @Prop() type: 'button' | 'submit' = 'submit';

  render() {
    return (
      <Host class={{
        'button--full': this.full,
      }}>
      <button
        class={{
          'button': true,
          'button--error': this.severity === 'error',
          'button--size-lg': this.size === 'lg',
          'button--size-md': this.size === 'md',
          'button--size-sm': this.size === 'sm' || this.size === 'mini', // deprecated: mini
          'button--size-xs': this.size === 'xs',
          'button--success': this.severity === 'success',
        }}
        disabled={this.disabled}
        form={this.form}
        tabIndex={this.pTabIndex}
        type={this.type}>
        <slot></slot>
      </button>
      </Host>
    );
  }

}

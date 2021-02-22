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
  @Prop() severity: PlanetButtonSeverity;
  @Prop() size: 'mini' | 'large' = 'large';
  @Prop() type: 'button' | 'submit' = 'submit';

  render() {
    return (
      <Host class={{
        'button--full': this.full,
      }}>
      <button
        class={{
          'button': true,
          'button--error': this.severity === PlanetButtonSeverity.ERROR,
          'button--mini': this.size === 'mini',
          'button--success': this.severity === PlanetButtonSeverity.SUCCESS,
        }}
        disabled={this.disabled}
        form={this.form}
        type={this.type}>
        <slot></slot>
      </button>
      </Host>
    );
  }

}

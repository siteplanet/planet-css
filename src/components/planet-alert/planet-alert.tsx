import { Component, Host, h, Prop } from '@stencil/core';
import { PlanetAlertSeverity } from './planet-alert-severity.enum';

@Component({
  tag: 'planet-alert',
  styleUrl: 'planet-alert.css',
  shadow: true,
})
export class PlanetAlert {
  @Prop() severity: PlanetAlertSeverity;

  render() {
    return (
      <Host
        class={{
          'alert': true,
          'alert--error': this.severity === PlanetAlertSeverity.ERROR,
          'alert--info': this.severity === PlanetAlertSeverity.INFO,
          'alert--success': this.severity === PlanetAlertSeverity.SUCCESS,
          'alert--warning': this.severity === PlanetAlertSeverity.WARNING,
        }}>
        <planet-wrapper>
          <div class="alert__box">
            <div class="alert__content">
              <slot></slot>
            </div>
          </div>
        </planet-wrapper>
      </Host>
    );
  }

}

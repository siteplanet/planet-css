import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'planet-modal',
  styleUrl: 'planet-modal.css',
  shadow: true,
})
export class PlanetModal {
  @Prop() titleOfModal: string;

  render() {
    return (
      <Host>
        <planet-backdrop>
          <div class="modal__box">
            <div class="modal__title">{this.titleOfModal}<slot name="title" /></div>
            <div class="modal__content">
              <slot name="content" />
            </div>
            <div class="modal__actions">
              <slot name="actions" />
            </div>
          </div>
        </planet-backdrop>
        <slot></slot>
      </Host>
    );
  }

}

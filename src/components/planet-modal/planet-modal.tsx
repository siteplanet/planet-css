import { Component, Event, EventEmitter, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'planet-modal',
  styleUrl: 'planet-modal.css',
  shadow: true,
})
export class PlanetModal {
  @Prop() titleOfModal: string;
  @Event() pClose: EventEmitter<void>;

  handleClose(): void {
    this.pClose.emit();
  }

  render() {
    return (
      <Host>
        <planet-backdrop>
          <div class="modal__box">
            <div class="modal__header">
              <div class="modal__title">{this.titleOfModal}<slot name="title" /></div>
              <planet-button-group>
                <planet-button size="mini" onClick={() => this.handleClose()}>X</planet-button>
              </planet-button-group>
            </div>
            <div class="modal__content">
              <slot name="content" />
            </div>
          </div>
        </planet-backdrop>
        <slot></slot>
      </Host>
    );
  }

}

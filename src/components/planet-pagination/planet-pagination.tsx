import { Component, Event, EventEmitter, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'planet-pagination',
  styleUrl: 'planet-pagination.css',
  shadow: true,
})
export class PlanetPagination {
  /*
  * List of allowed items per page
  */
  @Prop() allowedItemsPerPage: number[];
  /*
  * Number of current page
  */
  @Prop({ mutable: true }) page = 1;
  /*
  * Number of total items
  */
  @Prop() totalItems: number;
  @State() itemsPerPage = 1;
  @Event() pUpdate: EventEmitter<{ limit: number, skip: number }>;

  componentWillLoad() {
    this.itemsPerPage = this.allowedItemsPerPage?.length > 0 ? this.allowedItemsPerPage[0] : 1;
  }

  render() {
    const { page } = this

    return (
      <Host>
        <planet-button-group>
          <planet-button onClick={() => this.goToPrevious()}>&lt;</planet-button>
          <planet-button>{page}</planet-button>
          <planet-button onClick={() => this.goToNext()}>&gt;</planet-button>
        </planet-button-group>

        <planet-button-group>
          {this.allowedItemsPerPage.map(item => (
            <planet-button onClick={() => this.setItemsPerPage(item)} color={item === this.itemsPerPage ? 'success' : 'info'}>{item}</planet-button>
          ))}
        </planet-button-group>
        <slot></slot>
      </Host>
    );
  }

  public reset() {
    this.itemsPerPage = this.allowedItemsPerPage?.length > 0 ? this.allowedItemsPerPage[0] : 1;
    this.page = 1;
    this.emitUpdate();
  }

  private setItemsPerPage(max: number) {
    this.itemsPerPage = max;
    this.page = 1;
    this.emitUpdate();
  }

  private goToPrevious() {
    if (this.page <= 1) {
      return;
    }
    this.page = this.page - 1;
    this.emitUpdate();
  }

  private goToNext() {
    if (this.page >= Math.ceil(this.totalItems / this.itemsPerPage)) {
      return;
    }
    this.page = this.page + 1;
    this.emitUpdate();
  }

  private emitUpdate() {
    this.pUpdate.emit({
      limit: this.itemsPerPage,
      skip: this.itemsPerPage * (this.page - 1),
    })
  }
}

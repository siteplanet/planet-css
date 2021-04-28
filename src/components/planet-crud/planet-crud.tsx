import { Component, Event, EventEmitter, Fragment, Host, h, Prop, State, Method, Watch } from '@stencil/core';
import { PlanetButtonSeverity } from '../planet-button/planet-button-severity.enum';
import { PlanetValueInterface } from '../planet-input/planet-value-interface';

@Component({
  tag: 'planet-crud',
  styleUrl: 'planet-crud.css',
  shadow: true,
})
export class PlanetCrud {
  /*
  * List of allowed items per page
  */
  @Prop() allowedItemsPerPage: number[];
  /*
  * Column settings
  */
  @Prop() columns: {
    key: string;
    label: string;
    showInGrid: boolean;
    type: 'autocomplete' | 'select' | 'text' | 'time' | 'toggle';
    validators: any[];
    defaultValue?: PlanetValueInterface<any>,
    showAs?: 'primaryCode' | 'primaryName' | 'secondaryCode' | 'secondaryName';
  }[];
  /*
  * Data for rows
  */
  @Prop() data: any[];
  /*
  * Number of current page
  */
  @Prop({ mutable: true }) page = 1;
  /*
  * Title of form
  */
  @Prop() titleOfForm: string;
  /*
  * Number of total items
  */
  @Prop({ mutable: true }) totalItems: number;

  @State() dataState: any[];
  @State() formState: object;
  @State() formStatePrevious: object;
  @State() formMode: 'post' | 'put' | null;

  @Event() itemAdd: EventEmitter<object>;
  @Event() itemDeleted: EventEmitter<object>;
  @Event() itemUpdate: EventEmitter<object>;
  @Event() itemSearch: EventEmitter<object>;

  @Method() async setColumnValue(key, valuePair) {
    console.log(`old formstate`, this.formState);
    this.formState = { ...this.formState, [key]: valuePair };
    console.log(`new formstate`, this.formState);
  }

  @Method() async openForm(state: 'put' | 'post', row?: any) {
    this.createForm(state, row);
    this.formMode = state;
  }

  @Method() async closeForm() {
    this.formMode = null;
    this.clearForm();
  }

  @Watch('data') dataUpdate(newValue: any[], _oldValue: any[]) {
    this.dataState = newValue;
  }

  componentWillLoad() {
    this.dataState = this.data;
  }

  clearForm() {
    this.formState = {};
    this.formStatePrevious = {};
  }

  createForm(state: 'put' | 'post', row?: any) {
    this.formState = {};
    this.formStatePrevious = {};
    this.columns.forEach(column => {
      this.formState[column.key] = {
        description: row ? row[column.key]?.description : (state === 'post' && column?.defaultValue?.description ? column.defaultValue.description : null),
        value: row ? row[column.key]?.value : (state === 'post' && column?.defaultValue?.value ? column.defaultValue.value : null),
      };
      this.formStatePrevious[column.key] = this.formState[column.key];
    });
  }

  handleInput(key: string, event) {
    this.formState = { ...this.formState, [key]: event.target.value }
  }

  handleSearch(key: string) {
    console.log(`crud handles click on search button`);
    this.itemSearch.emit({ key });
  }

  handleSubmit(e) {
    e.preventDefault();
    switch (this.formMode) {
      case 'post': this.handleAdd(this.formState); break;
      case 'put': this.handleUpdate(this.formState); break;
    }
  }

  handleAdd(item) {
    this.itemAdd.emit({ new: item });
    console.log(`emit add`, { new: item });
  }

  handleDelete(item) {
    this.itemDeleted.emit({ previous: item });
  }

  handleUpdate(item) {
    this.itemUpdate.emit({ new: item, previous: this.formStatePrevious });
  }

  render() {
    const { allowedItemsPerPage, page, totalItems } = this

    return (
      <Host class="crud">
        {this.formMode ? (
          <form id="form" onSubmit={(e) => this.handleSubmit(e)}>
            <planet-modal titleOfModal="New item" onPClose={() => { this.closeForm() }}>
              <div slot="content">
                <planet-row class="form-section">
                  {this.columns.map(column => (
                    <planet-column key={column.key} xlarge={6} medium={12}>
                      <planet-input
                        label={column.label}
                        type={column.type}
                        value={this.formState[column.key]}
                        validators={column.validators}
                        onPChange={(event) => this.handleInput(column.key, event)}
                        onPSearchClick2={() => this.handleSearch(column.key)}>
                      </planet-input>
                    </planet-column>
                  ))}
                </planet-row>
                <planet-row class="modal-actions">
                  <planet-column>
                    <planet-button full={true} severity={PlanetButtonSeverity.ERROR} onClick={() => this.closeForm()} type="button">Close</planet-button>
                  </planet-column>
                  <planet-column>
                    <planet-button full={true} severity={PlanetButtonSeverity.SUCCESS} type="submit" form="form" onClick={(e) => this.handleSubmit(e)}>Save</planet-button>
                  </planet-column>
                </planet-row>
              </div>
            </planet-modal>
          </form>
        ) : null}
        <planet-row>
          <planet-column>
            <planet-title-of-page>
              {this.titleOfForm}
            </planet-title-of-page>
          </planet-column>
          <planet-column class="crud__actions">
            <planet-pagination allowedItemsPerPage={allowedItemsPerPage} page={page} totalItems={totalItems} style={{float: 'right'}}></planet-pagination>
            <planet-button-group style={{float: 'right'}}>
              <planet-button onClick={() => this.openForm('post')} size="sm">New item</planet-button>
            </planet-button-group>
          </planet-column>
        </planet-row>
        <planet-grid style={{ gridTemplateColumns: `repeat(${this.columns.filter(column => column.showInGrid).length + 1}, 1fr)` }}>
          {this.columns.filter(column => column.showInGrid).map(column => (<planet-grid-header>{column.label}</planet-grid-header>))}
          <planet-grid-header>Actions</planet-grid-header>
          {this.dataState ? this.dataState.map((row) => (
            <Fragment>
              {this.columns.filter(column => column.showInGrid).map(column => (
                <planet-grid-item>{row[column.key] ? row[column.key].value : null}</planet-grid-item>
              ))}
              <planet-grid-item>
                <planet-buton-group>
                  <planet-button size="xs" onClick={() => this.openForm('put', row)}>Edit</planet-button>
                  <planet-button severity={PlanetButtonSeverity.ERROR} size="xs" onClick={() => this.handleDelete(row)}>Delete</planet-button>
                </planet-buton-group>
              </planet-grid-item>
              <planet-card>
                <div class="card-container" style={{ display: 'flex' }}>
                  <div class="card-main" style={{ flex: '1' }}>
                    <planet-card-title>
                      {this.columns.filter(column => column.showInGrid && column?.showAs === 'primaryCode').map(column => (
                        <strong>{row[column.key] ? row[column.key].value : null} /&nbsp;</strong>
                      ))}
                      {this.columns.filter(column => column.showInGrid && column?.showAs === 'primaryName').map(column => (
                        <Fragment>{row[column.key] ? row[column.key].value : null}</Fragment>
                      ))}
                    </planet-card-title>
                    {this.columns.filter(column => column.showInGrid && column?.showAs === 'secondaryName').map(column => (
                      <planet-card-content>{row[column.key] ? row[column.key].value : null}</planet-card-content>
                    ))}
                  </div>
                  <div>
                      <div class="card-extra" style={{color: 'rgba(0, 0, 0, .6)', textAlign: 'right', padding: '16px 16px 0', fontSize: '18px', lineHeight: '1.5'}}>
                        {this.columns.filter(column => column.showInGrid && column?.showAs === 'secondaryCode').map(column => (
                          <Fragment>{row[column.key] ? row[column.key].value : null}<br /></Fragment>
                        ))}
                      </div>
                  </div>
                </div>
                <planet-card-actions>
                  <planet-button size="xs" onClick={() => this.openForm('put', row)}>Edit</planet-button>
                  <planet-button severity={PlanetButtonSeverity.ERROR} size="xs" onClick={() => this.handleDelete(row)}>Delete</planet-button>
                </planet-card-actions>
              </planet-card>
            </Fragment>
          )) : null}
        </planet-grid>
        <slot></slot>
      </Host>
    );
  }

}

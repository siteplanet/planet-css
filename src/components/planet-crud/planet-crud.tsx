import { Component, Event, EventEmitter, Fragment, Host, h, Prop, State, Method } from '@stencil/core';
import { RequiredValidator } from '../../validators/required-validator/required-validator';
import { PlanetButtonSeverity } from '../planet-button/planet-button-severity.enum';

@Component({
  tag: 'planet-crud',
  styleUrl: 'planet-crud.css',
  shadow: true,
})
export class PlanetCrud {
  /*
  * Column settings
  */
  @Prop() columns: {
    key: string;
    label: string;
    type: string;
  }[] = [
      {
        key: 'id',
        label: 'ID',
        type: 'text'
      },
      {
        key: 'shortName',
        label: 'Short Name',
        type: 'text'
      },
      {
        key: 'longName',
        label: 'Long Name',
        type: 'text'
      },
      {
        key: 'country',
        label: 'Country',
        type: 'text'
      },
    ];
  /*
  * Data for rows
  */
  @Prop() data: any[] = [
    {
      id: {
        description: 'x',
        value: 'x',
      },
      shortName: {
        description: 'x',
        value: 'x',
      },
      longName: {
        description: 'x',
        value: 'x',
      },
      country: {
        description: 'x',
        value: 'x',
      },
    },
    {
      id: {
        description: 'x',
        value: 'x',
      },
      shortName: {
        description: 'x',
        value: 'x',
      },
      longName: {
        description: 'x',
        value: 'x',
      },
      country: {
        description: 'x',
        value: 'x',
      },
    }
  ]
  /*
  * Number of current page
  */
  @Prop() page: number;
  /*
  * Number of total pages
  */
  @Prop() pages: number;
  /*
  * Title of form
  */
  @Prop() titleOfForm: string;

  @State() dataState: any[];
  @State() formState: object;
  @State() formMode: 'post' | 'put' | null;

  @Event() itemAdd: EventEmitter<object>;
  @Event() itemDeleted: EventEmitter<object>;
  @Event() itemUpdate: EventEmitter<object>;

  @Method() async openForm(state: 'put' | 'post') {
    this.createForm();
    this.formMode = state;
  }

  @Method() async closeForm() {
    this.formMode = null;
    this.clearForm();
  }

  componentWillLoad() {
    this.dataState = this.data;
  }

  clearForm() {
    this.formState = {};
  }

  createForm() {
    this.formState = {};
    this.columns.forEach(column => {
      this.formState[column.key] = {
        description: null,
        value: null,
      };
    });
  }

  handleInput(key: string, event) {
    this.formState = { ...this.formState, [key]: event.target.value }
  }

  handleSubmit(e) {
    e.preventDefault();
    switch (this.formMode) {
      case 'post': this.handleAdd(this.formState); break;
      case 'put': this.handleUpdate(this.formState); break;
    }
  }

  handleAdd(item) {
    console.log(`emit add`, { new: item });
    this.itemAdd.emit({ new: item });
  }

  handleDelete(item) {
    console.log(`emit delete`, { previous: item });
    this.itemDeleted.emit({ previous: item });
  }

  handleUpdate(item) {
    console.log(`emit update`, { previous: item });
    this.itemUpdate.emit({ previous: item });
  }

  render() {
    return (
      <Host class="crud">
        {this.formMode ? (
          <form id="form" onSubmit={(e) => this.handleSubmit(e)}>
            <planet-modal titleOfModal="New item">
              <div slot="content">
                <planet-row class="form-section">
                  {this.columns.map(column => (
                    <planet-column key={column.key} xlarge={6}>
                      <planet-input
                        label={column.label}
                        value={this.formState[column.key]}
                        validators={[RequiredValidator]}
                        onInput={(event) => this.handleInput(column.key, event)}>
                      </planet-input>
                    </planet-column>
                  ))}
                </planet-row>
              </div>
              <div slot="actions">
                <planet-row>
                  <planet-column>
                    <planet-button severity={PlanetButtonSeverity.ERROR} full onClick={() => this.closeForm()} type="button">Close</planet-button>
                  </planet-column>
                  <planet-column>
                    <planet-button severity={PlanetButtonSeverity.SUCCESS} full type="submit" form="form" onClick={(e) => this.handleSubmit(e)}>Save</planet-button>
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
            <planet-pagination></planet-pagination>
            <planet-button-group>
              <planet-button onClick={() => this.openForm('post')}>New item</planet-button>
            </planet-button-group>
          </planet-column>
        </planet-row>
        <planet-grid>
          {this.columns.map(column => (<planet-grid-header>{column.label}</planet-grid-header>))}
          <planet-grid-header>Actions</planet-grid-header>
          {this.dataState ? this.dataState.map((row) => (
            <Fragment>
              {this.columns.map(column => (
                <planet-grid-item>{row[column.key] ? row[column.key].value : null}</planet-grid-item>
              ))}
              <planet-grid-item>
                <planet-button size="mini">Edit</planet-button>
                <planet-button severity={PlanetButtonSeverity.ERROR} size="mini" onClick={() => this.handleDelete(row)}>Delete</planet-button>
              </planet-grid-item>
            </Fragment>
          )) : null}
          <planet-grid-item>1</planet-grid-item>
          <planet-grid-item>2</planet-grid-item>
          <planet-grid-item>3</planet-grid-item>
          <planet-grid-item>4</planet-grid-item>
          <planet-grid-item>
            <planet-button size="mini">Edit</planet-button>
            <planet-button severity={PlanetButtonSeverity.ERROR} size="mini">Delete</planet-button>
          </planet-grid-item>
          <planet-grid-item>1</planet-grid-item>
          <planet-grid-item>2</planet-grid-item>
          <planet-grid-item>3</planet-grid-item>
          <planet-grid-item>4</planet-grid-item>
          <planet-grid-item>
            <planet-button size="mini">Edit</planet-button>
            <planet-button severity={PlanetButtonSeverity.ERROR} size="mini">Delete</planet-button>
          </planet-grid-item>
        </planet-grid>
        <slot></slot>
      </Host>
    );
  }

}

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
  @Prop() data: [];
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

  @State() dataState: [];
  @State() modalState: string;
  @State() formState: object;

  @Event() itemDeleted: EventEmitter<object>;

  @Method() async openForm(state: 'put' | 'post') {
    this.createForm();
    this.modalState = state;
  }

  @Method() async closeForm() {
    this.modalState = null;
    this.clearForm();
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
    console.log('submit');
    // send data to our backend
  }


  deleteItem(item) {
    console.log(`delete`, item);
  }

  render() {
    return (
      <Host class="crud">
        {this.modalState ? (
          <form onSubmit={(e) => this.handleSubmit(e)}>
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
                {JSON.stringify(this.formState)}
                <planet-row>
                  <planet-column>
                    <planet-button severity={PlanetButtonSeverity.ERROR} full onClick={() => this.closeForm()}>Close</planet-button>
                  </planet-column>
                  <planet-column>
                    <planet-button severity={PlanetButtonSeverity.SUCCESS} full>Save</planet-button>
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
          {this.dataState ? this.dataState.map(() => (
            <Fragment>
              <planet-grid-item>1</planet-grid-item>
              <planet-grid-item>2</planet-grid-item>
              <planet-grid-item>3</planet-grid-item>
              <planet-grid-item>4</planet-grid-item>
              <planet-grid-item>
                <planet-button size="mini">Edit</planet-button>
                <planet-button severity={PlanetButtonSeverity.ERROR} size="mini" onClick={() => this.deleteItem('post')}>Delete</planet-button>
              </planet-grid-item></Fragment>
          )) : null}
          <planet-grid-header>A</planet-grid-header>
          <planet-grid-header>B</planet-grid-header>
          <planet-grid-header>C</planet-grid-header>
          <planet-grid-header>D</planet-grid-header>
          <planet-grid-header>E</planet-grid-header>
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

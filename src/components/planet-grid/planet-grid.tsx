import { Component, Host, h } from '@stencil/core';
import { PlanetButtonSeverity } from '../planet-button/planet-button-severity.enum';

@Component({
  tag: 'planet-grid',
  styleUrl: 'planet-grid.css',
  shadow: true,
})
export class PlanetGrid {

  render() {
    return (
      <Host>
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
        <planet-grid-item>1</planet-grid-item>
        <planet-grid-item>2</planet-grid-item>
        <planet-grid-item>3</planet-grid-item>
        <planet-grid-item>4</planet-grid-item>
        <planet-grid-item>
          <planet-button size="mini">Edit</planet-button>
          <planet-button severity={PlanetButtonSeverity.ERROR} size="mini">Delete</planet-button>
        </planet-grid-item>
        <slot></slot>
      </Host>
    );
  }

}

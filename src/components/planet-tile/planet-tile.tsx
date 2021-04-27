import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'planet-tile',
  styleUrl: 'planet-tile.css',
  shadow: true,
})
export class PlanetTile {
  @Prop() color: string;
  @Prop() count: number;
  @Prop() graphNumbers: number[];

  render() {
    const { color } = this

    const xLengthPerArea = (100 / (this.graphNumbers.length - 1));
    const areas: any[] = [];
    this.graphNumbers.filter((_, index) => index < this.graphNumbers.length - 1).map((nmbr, index) => {
      let area = `M${xLengthPerArea * index} 100 L${xLengthPerArea * index} ${Math.floor(100 - nmbr)} `;
      area += `L${xLengthPerArea * (index + 1)} ${Math.floor(100 - this.graphNumbers[index + 1])} L${xLengthPerArea * (index + 1)} 100 Z`;
      areas.push(area);
    });

    return (
      <Host class={{
        'tile': true,
        'tile--color-A': color === 'A',
        'tile--color-B': color === 'B',
        'tile--color-C': color === 'C',
        'tile--color-D': color === 'D',
        'tile--color-E': color === 'E',
        'tile--color-F': color === 'F',
        'tile--color-G': color === 'G',
        'tile--color-H': color === 'H',
      }}>
        <svg width='100%' height='115px' viewBox="0 0 100 100" preserveAspectRatio="none" style={{marginTop: '15px'}}>
          {areas.map(area => (
            <path class="tile__graph-area" d={area} />
          ))}

          {/* <rect x='40%' y='40%' width='25%' height='25%' /> */}

          {/* <polygon points="0,0 0,100 30,20 30,0" />
        <polygon points="30,0 30,20 60,0 60,0" />
        <polygon points="60,0 60,0 90,30 90,0" /> */}
        </svg>
        <div class="tile__content" style={{ position: 'absolute', left: '0', top: '0' }}>
          <div class="tile__title-box">
            <div class="title" style={{ marginTop: '20px' }}><slot></slot></div>
          </div>
        </div>
      </Host>
    );
  }

}

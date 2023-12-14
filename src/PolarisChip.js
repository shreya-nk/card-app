import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "@lrnwebcomponents/accent-card/accent-card.js";
import "@shreya.nk/polaris-chip/polaris-chip.js";
export class PolarisChip extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
      width: 420px;
      margin: 0 auto;
      border: 1px solid;
      padding: 10px;
      text-align: center;
      background-color: rgb(232, 123, 123);
}

.buttons {
  text-align: center;
}
      
    `;
  }

  constructor() {
    super();
    this.title = 'My boilerplate';
  }

  render() {
    return html`

<div class="card">
  <div class="logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Sheetz_logo.svg" alt="logo" class="logo"/>
  </div>
  <details>
<summary> Detail </summary>
<p>
  Sheetz is a chain of convenience stores and gas stations. Its services include convenience store items, gasoline and fuel services, and food.
</p>
</details>
<div class='directions'>
<a href="https://www.google.com/maps/place/Sheetz/@40.7844937,-77.8317491,15z/data=!4m6!3m5!1s0x89ceaf223c5770c5:0x7c69de1401daf29f!8m2!3d40.7844937!4d-77.8317491!16s%2Fg%2F11gzn1143_?entry=ttu">Directions</a>
</div>

<h1> Most Popular Item: </h1>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/440px-Hot_dog_with_mustard.png" alt="hotdog"/>
</div>



    `;
  }
}

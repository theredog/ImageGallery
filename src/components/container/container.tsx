import { Component, h } from "@stencil/core";

@Component({
    tag: 'comp-container',
    styleUrl: 'container.css',
    shadow: true
})
export class CompContainer {

    render() {
        return (
            <section>
                <header class="main-header">
                    <h1>Image Picker</h1>
                </header>
                <main>
                  <ul class='main-grid-list'>
                    <slot></slot>
                  </ul>
                </main>
            </section>
        );
    }
}

import '../button/button-submit';

class FormReview extends HTMLElement {
    connectedCallback() {
        this.action = this.getAttribute('action') || null;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .button-link {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 12px 16px;
                    border-radius: 8px;
                    font-size: 10pt;
                    text-decoration: none;
                    margin: 8px 0px;
                    min-height: 44px;
                }
                label{
                    display:block;
                    margin-bottom: 8px;
                }
                input {
                    padding: 12px 16px;
                    border-radius: 6px;
                    background-color: transparent;
                    border:none;
                    border:  grey solid 1px;
                    color: white;
                     font-family: inherit;
                }
                textarea {
                    height: 80px;
                    padding: 8px 16px;
                    border-radius: 6px;
                    background-color: transparent;
                    border:none;
                    border:  grey solid 1px;
                    color: white;
                    font-family: inherit;
                }
                .wrapper-input{
                    display:flex;
                    flex-direction: column;
                    margin: 12px 0px;
                }
                input:focus {
                    outline: none !important;
                    border: var(--primary-color) 1px solid;
                }
                textarea:focus {
                    outline: none !important;
                    border: var(--primary-color) 1px solid;
                }
            </style>
                <form id="formReview">
                    <h3>Submit your review</h3>
                    <div class="wrapper-input">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" required>
                    </div>
                    <div class="wrapper-input">
                        <label for="message" class="form-label">Message</label>
                        <textarea id="message"></textarea>
                    </div>
                    <button-submit text="Submit"></button-submit>
                </form>
        `;
    }
}
customElements.define('form-review', FormReview);

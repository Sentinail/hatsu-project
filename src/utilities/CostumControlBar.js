import videojs from "video.js";
const cogIcon = require("../assets/icons/cog-icon.png")

class Options extends videojs.getComponent('Button') {
    constructor(player, options) {
        super(player, options);
  
        this.controlText('Options');
        this.addClass('options'); 
  
        const icon = videojs.dom.createEl('img', {
            src: cogIcon,
        });

        const container = videojs.dom.createEl("div", {
        });
        videojs.dom.addClass(container, "option_container");

        container.appendChild(icon);
        container.addEventListener('click', () => {
          this.trigger('options');
        });
  
        this.el().appendChild(container);
    }
}

export default Options;

import { component, TilingLayout, ViewModel } from 'lively.morphic/index.js';
import { HTMLMorph } from 'lively.morphic/html-morph.js';
import { rect } from 'lively.graphics/geometry-2d.js';

class VideoLooperModel extends ViewModel {
  static get properties () {
    return {
      srcURL: {}
    };
  }

  viewDidLoad () {
    const { srcURL } = this;
    // TODO: what the hell is this?
    if (!this.ui?.videoPlayer?.width) return;
    this.ui.videoPlayer.html = `<video controls autoplay='true' loop='true' disablepictureinpicture='true' muted="muted" playsinline='true' style='object-fit: fill' width='100%' height='100%'>
    <source src="${srcURL}">
  </video>`;
  }
}

export const VideoLooper = component({
  name: 'video looper',
  defaultViewModel: VideoLooperModel,
  layout: new TilingLayout({
    hugContentsHorizontally: true,
    hugContentsVertically: true,
    padding: rect(20, 20, 0, 0)
  }),
  submorphs: [{
    type: HTMLMorph,
    name: 'video player'
  }
  ]
});

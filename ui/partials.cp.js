import { component, TilingLayout, ViewModel } from 'lively.morphic/index.js';
import { HTMLMorph } from 'lively.morphic/html-morph.js';
import { rect, pt } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics';

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
    align: 'center',
    axisAlign: 'center'
  }),
  extent: pt(37, 31.5),
  submorphs: [
    {
      name: 'border',
      // FIXME: This is a workaround to outmaneuver a rendering bug that inserts nonsensical margins!
      clipMode: 'hidden',
      layout: new TilingLayout({
        hugContentsHorizontally: true,
        hugContentsVertically: true,
        padding: rect(20, 20, 0, 0)
      }),
      fill: Color.pink,
      submorphs: [
        {
          type: HTMLMorph,
          name: 'video player'
        }
      ]
    }
  ]
});

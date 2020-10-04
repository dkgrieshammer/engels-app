import React from 'react';
import WpPage from './WpPage';

export default {
  title: 'Wordpress/Page'
}

export const Default = () => <WpPage page={content} />

const content = {content:{}}
content.content.rendered = `<div>
<h2>Online-Edition privater &amp; geschäftlicher Korrespondenz der Familie Engels</h2>
<div class="wp-block-columns">
<div class="wp-block-column">
<figure class="wp-block-image"><img loading="lazy" width="540" height="401" src="https://chost20.zim.uni-wuppertal.de/wordpress/wp-content/uploads/2020/08/Bild_Wuppertal.png" alt="" class="wp-image-12"></figure>
</div>
<div class="wp-block-column">
<h3>Vivamus iaculis facilisis mauris</h3>
<p>Mattis imperdiet phasellus ipsum volutpat vestibulum taciti porta netus sit porttitor mauris, potenti magna consectetur luctus cras parturient natoque scelerisque sed. Odio hendrerit dignissim sapien dui amet porta ante fames habitant placerat, volutpat libero taciti montes interdum pretium facilisi inceptos. Vitae interdum morbi ornare ridiculus sagittis sociosqu, platea ac phasellus amet etiam tristique, placerat himenaeos cubilia lobortis auctor.<br><br>Mattis justo nunc donec tincidunt netus fames massa, ridiculus ut porta torquent litora venenatis mi, fusce lacus suspendisse ullamcorper odio aptent. Habitasse nec orci mattis sed viverra ridiculus inceptos bibendum magna vivamus libero volutpat, maecenas elit auctor faucibus erat class lacinia etiam feugiat nibh ex, urna sapien aliquet torquent hac praesent gravida lobortis est tempor curae.<br>Cursus ligula duis montes non morbi sit hendrerit penatibus ex blandit eu, auctor a placerat inceptos primis integer at massa enim metus magna, dis aenean nullam parturient cras fames taciti porta lorem natoque. Aliquam in habitant dignissim congue taciti sodales vivamus velit maximus, nostra posuere tempus risus tempor litora felis.</p>
</div>
</div>
<p></p>
</div>`
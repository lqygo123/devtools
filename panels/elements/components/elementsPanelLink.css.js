// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.element-reveal-icon {
  --override-element-reveal-icon-background: rgb(110 110 110);

  display: inline-block;
  width: 28px;
  height: 24px;
  -webkit-mask-position: -140px 96px;
  -webkit-mask-image: var(--image-file-largeIcons);
  background-color: var(--override-element-reveal-icon-background);
}

/*# sourceURL=elementsPanelLink.css */
`);
export default styles;

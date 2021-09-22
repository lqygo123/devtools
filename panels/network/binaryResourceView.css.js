// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.panel.network .toolbar.binary-view-toolbar {
  border-top: 1px solid var(--color-details-hairline);
  border-bottom: 0;
  padding-left: 5px;
}

.binary-view-copied-text {
  opacity: 100%;
}

.binary-view-copied-text.fadeout {
  opacity: 0%;
  transition: opacity 1s;
}

/*# sourceURL=binaryResourceView.css */
`);
export default styles;

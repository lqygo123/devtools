// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.image-preview-container {
  background: transparent;
  text-align: center;
  border-spacing: 0;
}

.image-preview-container img {
  margin: 6px 0;
  max-width: 100px;
  max-height: 100px;
  background-image: var(--image-file-checker);
  user-select: text;
  vertical-align: top;
  -webkit-user-drag: auto;
}

.image-container {
  padding: 0;
}

.image-container > div {
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.image-preview-container .row {
  line-height: 1.2;
  vertical-align: baseline;
}

.image-preview-container .title {
  padding-right: 0.5em;
  text-align: right;
  color: var(--color-text-secondary);
  white-space: nowrap;
}

.image-preview-container .description {
  white-space: nowrap;
  text-align: left;
  color: var(--color-text-primary);
}

.image-preview-container .description-link {
  max-width: 20em;
}

.image-preview-container .source-link {
  white-space: normal;
  word-break: break-all;
  color: var(--color-link);
  cursor: pointer;
}

/*# sourceURL=imagePreview.css */
`);
export default styles;

// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: inline;
}

.stack-preview-async-description {
  padding: 3px 0 1px;
  font-style: italic;
}

.stack-preview-container .ignore-list-link {
  opacity: 60%;
}

.stack-preview-container > tr {
  height: 16px;
  line-height: 16px;
}

.stack-preview-container td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.stack-preview-container .function-name {
  max-width: 80em;
}

.stack-preview-container:not(.show-hidden-rows) > tr.hidden-row {
  display: none;
}

.stack-preview-container > tr.show-all-link {
  font-style: italic;
}

.stack-preview-container.show-hidden-rows > tr.show-all-link {
  display: none;
}

/*# sourceURL=jsUtils.css */
`);
export default styles;

// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.custom-headers-list {
  height: 272px;
  width: 250px;
}

.custom-headers-wrapper {
  margin: 10px;
}

.header {
  padding: 0 0 6px;
  font-size: 18px;
  font-weight: normal;
  flex: none;
}

.custom-headers-header {
  padding: 2px;
}

.custom-headers-list-item {
  padding-left: 5px;
}

.editor-container {
  padding: 5px 0 0 5px;
}

.add-button {
  width: 150px;
  margin: auto;
  margin-top: 5px;
}

/*# sourceURL=networkManageCustomHeadersView.css */
`);
export default styles;

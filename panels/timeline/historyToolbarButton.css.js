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

.content {
  margin-left: 5px;
}

.history-dropdown-button {
  width: 160px;
  height: 26px;
  text-align: left;
  display: flex;
  border: 1px solid transparent;
}

.history-dropdown-button[disabled] {
  opacity: 50%;
  border: 1px solid transparent;
}

.history-dropdown-button > .content {
  padding-right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1 1;
  min-width: 35px;
}

.history-dropdown-button:focus-visible::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 0;
  right: 0;
  bottom: 2px;
  border-radius: 2px;
  background: var(--divider-line);
}

@media (forced-colors: active) {
  .history-dropdown-button[disabled] {
    opacity: 100%;
  }

  .history-dropdown-button[disabled] [is=ui-icon].icon-mask {
    background-color: GrayText;
  }
}

/*# sourceURL=historyToolbarButton.css */
`);
export default styles;

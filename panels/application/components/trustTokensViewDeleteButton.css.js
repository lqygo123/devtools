// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.delete-button {
  width: 16px;
  height: 16px;
  background: transparent;
  overflow: hidden;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
}

.delete-button:hover devtools-icon {
  --icon-color: var(--color-text-primary);
}

.delete-button:focus devtools-icon {
  --icon-color: var(--color-text-secondary);
}

.button-container {
  display: block;
  text-align: center;
}

/*# sourceURL=trustTokensViewDeleteButton.css */
`);
export default styles;

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

.link-icon {
  vertical-align: sub;
  margin-right: 0.5ch;
}

.link {
  padding: var(--issue-link-padding, 4px 0 0 0);
  text-decoration: var(--issue-link-text-decoration, underline);
  cursor: pointer;
  font-size: var(--issue-link-font-size, 14px);
  color: var(--color-link);
  border: none;
  background: none;
  font-family: inherit;
}

.link:focus:not(:focus-visible) {
  outline: none;
}

.pending-link {
  opacity: 75%;
  pointer-events: none;
  cursor: default;
  text-decoration: none;
}

.disabled-link {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
}

/*# sourceURL=surveyLink.css */
`);
export default styles;

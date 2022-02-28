// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.css-length {
  display: inline-block;
  position: relative;
  outline: none;
}

.value {
  cursor: ew-resize;
}

.unit-dropdown {
  display: none;
}

.unit-dropdown select {
  all: unset;
  cursor: pointer;
  opacity: 0%;
  width: 0.8em;
}

.icon {
  position: absolute;
  display: inline-block;
  -webkit-mask-image: var(--image-file-chevrons);
  -webkit-mask-position: -12px 4px;
  -webkit-mask-size: 19px 6px;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--color-text-primary);
  content: "";
  height: 1em;
  width: 1em;
}

:host(:not(:last-child)) {
  margin-right: 0.1em;
}

:host(:not(:last-child)) .unit-dropdown {
  position: absolute;
}

.css-length:hover .unit-dropdown {
  display: inline-block;
}

:host(:last-child) .unit-dropdown select {
  width: 0.6em;
}

/*# sourceURL=cssLength.css */
`);
export default styles;

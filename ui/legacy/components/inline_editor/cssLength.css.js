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

.css-length {
  display: inline-block;
  position: relative;
  outline: none;
}

.value {
  cursor: ew-resize;
}

select.unit {
  all: unset;
  cursor: pointer;
  width: 2ch;
}

select.unit:hover {
  text-decoration: underline;
}

select.unit.rem {
  width: 3ch;
}

select.unit.vmin,
select.unit.vmax {
  width: 4ch;
}

/*# sourceURL=cssLength.css */
`);
export default styles;

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

.paint-profiler-overview {
  background-color: var(--color-background);
}

.paint-profiler-canvas-container {
  flex: auto;
  position: relative;
}

.paint-profiler-pie-chart {
  width: 60px !important; /* stylelint-disable-line declaration-no-important */
  height: 60px !important; /* stylelint-disable-line declaration-no-important */
  padding: 2px;
  overflow: hidden;
  font-size: 10px;
}

.paint-profiler-canvas-container canvas {
  z-index: 200;
  background-color: var(--color-background);
  opacity: 95%;
  height: 100%;
  width: 100%;
}

.paint-profiler-canvas-container .overview-grid-window-resizer {
  z-index: 2000;
}

/*# sourceURL=paintProfiler.css */
`);
export default styles;

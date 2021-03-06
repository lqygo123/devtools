// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/**
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.overview-start-view {
  overflow: hidden;
  padding: 16px;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.overview-start-view h1 {
  font-size: 16px;
  text-align: center;
  font-weight: normal;
  margin: 0;
  padding: 8px;
}

.overview-start-view div {
  font-size: 12px;
  text-align: center;
  font-weight: normal;
  margin: 0;
  padding-bottom: 44px;
}

/*# sourceURL=cssOverviewStartView.css */
`);
export default styles;

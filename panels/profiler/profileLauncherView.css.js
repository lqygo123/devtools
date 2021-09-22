// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.profile-launcher-view {
  overflow: auto;
}

.profile-launcher-view-content {
  margin: 10px 16px;
  flex: auto 1 0;
}

.profile-launcher-view-content h1 {
  font-size: 15px;
  font-weight: normal;
  margin: 6px 0 10px 0;
}

.profile-launcher-view-content [is=dt-radio] {
  font-size: 13px;
}

.profile-launcher-view-content p {
  color: var(--color-text-secondary);
  margin-top: 1px;
  margin-left: 22px;
}

.profile-launcher-view-content p [is=dt-checkbox] {
  display: flex;
}

.profile-launcher-view-content button.running {
  color: var(--color-accent-red);
}

.profile-launcher-view-content > div {
  flex: auto 0 0;
}

.profile-launcher-view-content > .profile-isolate-selector-block {
  flex: auto 1 0;
  overflow: hidden;
}

.profile-isolate-selector-block button {
  min-width: 110px;
}

.profile-launcher-target-list {
  margin-bottom: 6px;
  border: 1px solid var(--color-details-hairline);
  flex: 150px 1 0;
}

.profile-launcher-target-list-container {
  overflow: auto;
}

.profile-memory-usage-item {
  min-width: 100%;
  width: max-content;
  padding: 4px;
  line-height: 16px;
  border-left: 3px solid transparent;
}

.profile-isolate-selector-block > .profile-memory-usage-item {
  margin-left: 1px;
  margin-bottom: 4px;
  font-weight: bolder;
}

.profile-launcher-target-list .profile-memory-usage-item:hover:not(.selected) {
  background-color: var(--item-hover-color);
}

.profile-memory-usage-item.selected {
  background-color: var(--legacy-item-selection-inactive-bg-color);
}

.javascript-vm-instances-list {
  width: max-content;
  min-width: 100%;
}

.javascript-vm-instances-list:focus .profile-memory-usage-item.selected {
  border-color: var(--legacy-selection-bg-color);
  background-color: var(--legacy-item-selection-bg-color);
}

.profile-memory-usage-item > div {
  flex-shrink: 0;
  margin-right: 12px;
}

.profile-memory-usage-item-size {
  width: 60px;
  text-align: right;
}

.profile-memory-usage-item-trend {
  min-width: 5em;
  color: var(--color-accent-green);
}

.profile-memory-usage-item-trend.increasing {
  color: var(--color-accent-red);
}

.profile-launcher-buttons {
  flex-wrap: wrap;
}

.profile-launcher-buttons button {
  min-width: 120px;
  height: 28px;
  margin: 4px 16px 4px 0;
}

@media (forced-colors: active) {
  .profile-memory-usage-item {
    forced-color-adjust: none;
    border-left-color: transparent;
  }

  .profile-memory-usage-item-trend,
  .profile-memory-usage-item-trend.increasing,
  .profile-launcher-view-content button.running,
  body.inactive .profile-launcher-view-content button.running:not(.toolbar-item) {
    color: ButtonText;
  }

  .javascript-vm-instances-list .profile-memory-usage-item:hover:not(.selected) {
    background-color: Highlight;
    color: HighlightText;
  }

  .javascript-vm-instances-list .profile-memory-usage-item.selected .profile-memory-usage-item-trend,
  .javascript-vm-instances-list .profile-memory-usage-item.selected .profile-memory-usage-item-trend.increasing {
    color: ButtonFace;
  }

  .javascript-vm-instances-list .profile-memory-usage-item:hover:not(.selected) .profile-memory-usage-item-trend,
  .javascript-vm-instances-list .profile-memory-usage-item:hover:not(.selected) .profile-memory-usage-item-trend.increasing {
    background-color: Highlight;
    color: HighlightText;
  }

  .javascript-vm-instances-list .profile-memory-usage-item.selected {
    background-color: ButtonText;
    border-color: Highlight;
    color: ButtonFace;
  }

  .javascript-vm-instances-list:focus .profile-memory-usage-item.selected,
  .javascript-vm-instances-list:focus-visible .profile-memory-usage-item.selected {
    background-color: Highlight;
    border-color: ButtonText;
    color: HighlightText;
  }
}

/*# sourceURL=profileLauncherView.css */
`);
export default styles;

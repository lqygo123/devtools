// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

header {
  padding: 0 0 6px;
  border-bottom: 1px solid var(--color-details-hairline);
  flex: none;
  margin-bottom: 25px;
}

h1 {
  font-size: 18px;
  font-weight: normal;
  padding-bottom: 3px;
  margin: 0;
}

[role="list"],
.widget.vbox {
  min-width: 300px;
}

.keybinds-key {
  padding: 0.1em 0.6em;
  border: 1px solid var(--color-details-hairline);
  font-size: 11px;
  background-color: var(--color-background-elevation-1);
  color: var(--color-text-primary);
  box-shadow: var(--box-shadow-outline-color);
  border-radius: 3px;
  display: inline-block;
  margin: 0 0.1em;
  text-shadow: 0 1px 0 var(--color-background);
  line-height: 1.5;
  white-space: nowrap;
}

.keybinds-list-item {
  min-height: 30px;
  display: grid;
  grid-template-rows: repeat(auto-fit, 30px);
  grid-template-columns: 1fr 30px 1fr 30px 30px;
  flex: auto 1 1;
}

.keybinds-list-item:focus-visible {
  background-color: var(--legacy-focus-bg-color);
}

.keybinds-list-item:not(.keybinds-category-header) {
  padding-left: 20px;
}

.keybinds-list-item.keybinds-editing {
  background-color: var(--color-background-elevation-2);
}

.keybinds-action-name {
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
}

.keybinds-shortcut,
.keybinds-info {
  grid-row: auto;
  grid-column: 3 / span 1;
}

.keybinds-info .devtools-link {
  padding-top: 6px;
}

.keybinds-error {
  color: var(--color-accent-red);
}

.keybinds-list-item.keybinds-editing .keybinds-shortcut {
  display: flex;
}

.keybinds-modified {
  grid-column: 2 / span 1;
}

.keybinds-list-item button {
  border: none;
  padding: 0;
  background: transparent;
}

.keybinds-list-item button:hover .icon-mask {
  background-color: var(--color-text-primary);
}

.keybinds-list-item button:focus-visible {
  background-color: var(--legacy-focus-bg-color);
}

.keybinds-list-item button[disabled] {
  opacity: 40%;
}

.keybinds-confirm-button {
  grid-column: -2 / span 1;
}

.keybinds-cancel-button {
  grid-column: -1 / span 1;
}

.keybinds-edit-button {
  display: none;
  grid-row: 1 / span 1;
  grid-column: 4 / span 1;
}

.keybinds-list-item:not(.keybinds-editing):hover .keybinds-edit-button,
.keybinds-list-item:not(.keybinds-editing):focus-within .keybinds-edit-button {
  display: inline-block;
}

.keybinds-list-text {
  padding: 3px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  user-select: none;
  color: var(--color-text-primary);
  text-align: start;
  position: relative;
  margin-right: 0;
}

.keybinds-category-header {
  font-weight: bold;
  line-height: 30px;
  white-space: nowrap;
}

.keybinds-category-header:not(:nth-child(2)) {
  border-top: 1px solid var(--color-details-hairline);
}

.keybinds-list-item:not(.keybinds-category-header):hover {
  background: var(--color-background-elevation-1);
}

.keybinds-set-select {
  text-align: right;
  margin-bottom: 25px;
}

.keybinds-set-select label p {
  display: inline;
  color: var(--color-text-primary);
}

.keybinds-set-select select {
  margin-left: 6px;
}

button.text-button {
  width: fit-content;
  align-self: flex-end;
}

.keybinds-list-text input {
  margin: 0 2px;
}

.docs-link.devtools-link {
  align-self: flex-start;
  min-height: 2em;
  line-height: 2em;
}

.keybinds-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: fit-content;
  margin-top: 10px;
}

/*# sourceURL=keybindsSettingsTab.css */
`);
export default styles;

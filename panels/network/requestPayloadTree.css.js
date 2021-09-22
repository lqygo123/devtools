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

.tree-outline {
  padding-left: 0;

  --override-error-background-color: #d93025;
  --override-error-text-color: #fff;
  --override-call-to-action-border-color: #f29900;
  --override-header-highlight-background-color: #ffff78;
}

.-theme-with-dark-background .tree-outline,
:host-context(.-theme-with-dark-background) .tree-outline {
  --override-error-text-color: #000;
  --override-call-to-action-border-color: rgb(255 166 13);
  --override-header-highlight-background-color: rgb(135 135 0);
}

.tree-outline > ol {
  padding-bottom: 5px;
  border-bottom: solid 1px var(--color-details-hairline);
}

.tree-outline > .parent {
  user-select: none;
  font-weight: bold;
  color: var(--color-text-primary);
  margin-top: -1px;
  display: flex;
  align-items: center;
  height: 26px;
}

.tree-outline li {
  display: block;
  padding-left: 5px;
  line-height: 20px;
}

.tree-outline li:not(.parent) {
  margin-left: 10px;
}

.tree-outline li:not(.parent)::before {
  display: none;
}

.tree-outline li.expanded .payload-count {
  display: none;
}

.tree-outline li .payload-toggle {
  display: none;
}

.tree-outline li.expanded .payload-toggle {
  display: inline;
  margin-left: 30px;
  font-weight: normal;
  color: var(--color-text-primary);
}

.tree-outline li .header-toggle:hover {
  color: var(--color-text-secondary);
  cursor: pointer;
}

.tree-outline .payload-name {
  color: var(--color-text-secondary);
  display: inline-block;
  margin-right: 0.25em;
  font-weight: bold;
  vertical-align: top;
  white-space: pre-wrap;
}

.tree-outline .payload-separator {
  user-select: none;
}

.tree-outline .payload-value {
  display: inline;
  margin-right: 1em;
  white-space: pre-wrap;
  word-break: break-all;
  margin-top: 1px;
}

.tree-outline .empty-request-payload {
  color: var(--color-text-disabled);
}

.request-payload-show-more-button {
  border: none;
  border-radius: 3px;
  display: inline-block;
  font-size: 12px;
  font-family: sans-serif;
  cursor: pointer;
  margin: 0 4px;
  padding: 2px 4px;
}

@media (forced-colors: active) {
  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected:focus {
    background: Highlight;
  }

  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li::before {
    background-color: ButtonText;
  }

  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected.parent::before {
    background-color: HighlightText;
  }

  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected *,
  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected.parent,
  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected.parent span {
    color: HighlightText;
  }
}

.payload-decode-error {
  color: var(--color-accent-red);
}

/*# sourceURL=requestPayloadTree.css */
`);
export default styles;

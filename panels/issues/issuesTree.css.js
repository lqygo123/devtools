// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
/* Remove container padding from TreeOutline.
 * Allows issues to touch the edges of the container. */

:host,
.issues {
  padding: 0;
  overflow: auto;
}

.issues {
  --issue-indent: 8px;
}
/* Override whitespace behavior for tree items to allow wrapping */

.issues li {
  white-space: normal;
}
/* Hide toggle for tree items which cannot be collapsed */

.issues .always-parent::before {
  display: none;
}
/* Override TreeOutline toggle switching to allow animation */

.issues li.parent::before {
  transition: transform 200ms;
  transform-origin: 25% 50%;
}

.issues li.parent.expanded::before {
  -webkit-mask-position: 0 0;
  transform: rotate(90deg);
}

.issue-category,
.issue {
  padding: 0 8px;
  padding-left: var(--issue-indent);
  overflow: hidden;
  flex: none;
  transition: background-color 200ms;
  border: 1px solid var(--color-details-hairline-light);
  border-width: 0 0 1px;
}

.issue-category.hidden-issues.parent.expanded {
  border-width: 0 0 1px 0;
  background-color: var(--color-background-elevation-1);
}

.issue-category + .children .issue,
.issue.expanded {
  background: var(--color-background);
}

.issue.expanded {
  border-width: 0;
}

.issue.selected,
.issue.expanded.selected {
  background-color: var(--legacy-focus-bg-color);
}

.unhide-all-issues-button {
  line-height: normal;
}

p {
  margin-block-start: 2px;
  margin-block-end: 2px;
}
/* Override selected tree item styles for issues to avoid changing width. */

.tree-outline-disclosure:not(.tree-outline-disclosure-hide-overflow) .tree-outline.hide-selection-when-blurred .issue-category.selected:focus-visible,
.tree-outline-disclosure:not(.tree-outline-disclosure-hide-overflow) .tree-outline.hide-selection-when-blurred .issue.selected:focus-visible {
  width: auto;
  padding-right: 8px;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 0;
  cursor: pointer;
  width: 100%;
}

.issue-category .header {
  line-height: 24px;
  padding-left: 2px;
}

.title {
  flex: 1;
  font-size: 14px;
  color: var(--color-text-primary);
  font-weight: normal;
  user-select: text;
}

.issue.expanded .title {
  font-weight: 450;
}

.body.children {
  border-bottom: 1px solid var(--color-details-hairline-light);
  padding: 6px 0;
  position: relative;
  padding-left: calc(var(--issue-indent) + 43px);
  padding-bottom: 26px;
  padding-right: 8px;
}

.issue-category + .children {
  --issue-indent: 24px;

  padding-left: 0;
}

/* Show a colored border on the left side of opened issues. */
.body::before {
  content: '';
  display: block;
  position: absolute;
  left: calc(var(--issue-indent) + 23px);
  top: 0;
  bottom: 20px;
  width: 2px;
}

.issue-kind-breaking-change.body::before {
  border-left: 2px solid var(--issue-color-yellow);
}

.issue-kind-page-error.body::before {
  border-left: 2px solid var(--issue-color-red);
}

.issue-kind-improvement.body::before {
  border-left: 2px solid var(--issue-color-blue);
}

devtools-icon.leading-issue-icon {
  margin: 0 7px;
}

.message {
  line-height: 20px;
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: 4px;
  user-select: text;
}

.message p {
  margin-bottom: 16px;
}

.message li {
  margin-top: 8px;
}

.message code {
  color: var(--color-text-primary);
  font-size: 12px;
  user-select: text;
  cursor: text;
  background: var(--color-background-elevation-1);
}

.separator::before {
  content: '·';
  padding-left: 1ex;
  padding-right: 1ex;
}

.link {
  font-size: 14px;
  color: var(--color-link);
}

.link-wrapper {
  margin-top: 15px;
  user-select: text;
}

.affected-resources-label,
.resolutions-label {
  margin-top: 5px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-primary);
  display: inline-block;
}

.link-list {
  list-style-type: none;
  list-style-position: inside;
  padding-inline-start: 0;
}

.resolutions-list {
  list-style-type: none;
  list-style-position: inside;
  padding-inline-start: 0;
}
/* We inherit all the styles from treeoutline, but these are simple text <li>, so we override some styles */

.link-list li::before {
  content: none;
  -webkit-mask-image: none;
}

.resolutions-list li::before {
  content: "→";
  -webkit-mask-image: none;
  padding-right: 5px;
  position: relative;
  top: -1px;
}

.resolutions-list li {
  display: list-item;
}

ul > li.plain-enum {
  display: list-item;
}
/* This is a hack because the tree view's CSS overrides list styling in a non-compositional way. This
   can be removed once we've moved to proper components. */
ul > li.plain-enum::before {
  content: "";
  padding: 0;
  margin: 0;
  max-width: 0;
}

.affected-resources-label + .affected-resources {
  padding: 3px 0 0 0;
  position: relative;
  user-select: text;
}

.affected-resource-label {
  font-size: 14px;
  line-height: 20px;
  color: var(--color-text-primary);
  position: relative;
  cursor: pointer;
}

.affected-resource-cookie {
  font-size: 14px;
  line-height: 20px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-element {
  font-size: 14px;
  line-height: 20px;
  color: var(--color-link);
  border: 0;
  border-collapse: collapse;
}

.affected-resource-row {
  font-size: 14px;
  line-height: 20px;
  border: 0;
  border-collapse: collapse;
  vertical-align: top;
}

.affected-resource-mixed-content {
  font-size: 14px;
  line-height: 20px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-heavy-ad {
  font-size: 14px;
  line-height: 20px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-request {
  font-size: 14px;
  line-height: 20px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-source {
  font-size: 14px;
  line-height: 20px;
  color: var(--color-link);
  border: 0;
  border-collapse: collapse;
}

.affected-resource-list {
  border-spacing: 10px 0;
  margin-left: -12px;
}

.affected-resource-header {
  font-size: 12px;
  color: var(--color-text-primary);
  padding-left: 2px;
}

.code-example {
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
}

.affected-resource-blocked-status {
  color: var(--issue-color-red);
}

.affected-resource-report-only-status {
  color: var(--issue-color-yellow);
}

.affected-resource-cookie-info {
  color: var(--color-text-secondary);
  padding: 2px;
  text-align: right;
}

.affected-resource-cookie-info-header {
  text-align: right;
}

.affected-resource-mixed-content-info {
  color: var(--color-text-secondary);
  padding: 2px;
}

.affected-resource-heavy-ad-info {
  color: var(--color-text-secondary);
  padding: 2px;
}

.affected-resource-heavy-ad-info-frame {
  display: flex;
  align-items: center;
  color: var(--color-text-secondary);
  padding: 2px;
}

.affected-resource-cell {
  color: var(--color-text-secondary);
  padding: 2px;
}

.affected-resource-cell.link {
  color: var(--color-link);
}

.affected-resource-cell span.icon {
  margin-right: 0.5ex;
  vertical-align: sub;
}

.affected-resources > .parent {
  margin-top: 0;
  padding: 2px 5px 0 5px;
}

.affected-resources > .parent.expanded {
  background: var(--color-background-elevation-0);
}

.affected-resources > .children.expanded {
  background: var(--color-background-elevation-0);
  padding: 6px 0 9px 5px;
  margin-bottom: 10px;
}

.aggregated-issues-count {
  padding-right: 7px;
}

.affected-resource-directive-info-header {
  text-align: left;
}

.affected-resource-directive {
  font-size: 14px;
  line-height: 20px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-directive-info {
  color: var(--color-text-secondary);
  padding: 2px;
  text-align: left;
}

.devtools-link {
  padding-top: 4px;
}

devtools-icon.link-icon {
  vertical-align: sub;
  margin-right: 0.5ch;
}

devtools-icon.elements-panel,
devtools-icon.network-panel {
  margin-right: 0.5ex;
  vertical-align: baseline;
  height: 14px;
}

/*# sourceURL=issuesTree.css */
`);
export default styles;

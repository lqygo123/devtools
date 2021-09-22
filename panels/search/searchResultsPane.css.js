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

:host {
  padding: 0;
  margin: 0;
  overflow-y: auto;
}

.tree-outline {
  padding: 0;
}

.tree-outline ol {
  padding: 0;
}

.tree-outline li {
  height: 16px;
}

li.search-result {
  cursor: pointer;
  font-size: 12px;
  margin-top: 8px;
  padding: 2px 0 2px 4px;
  word-wrap: normal;
  white-space: pre;
}

li.search-result:hover {
  background-color: var(--item-hover-color);
}

li.search-result .search-result-file-name {
  color: var(--color-text-primary);
  flex: 1 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

li.search-result .search-result-matches-count {
  color: var(--color-text-secondary);
  margin: 0 8px;
}

li.search-result.expanded .search-result-matches-count {
  display: none;
}

li.show-more-matches {
  color: var(--color-text-primary);
  cursor: pointer;
  margin: 8px 0 0 -4px;
}

li.show-more-matches:hover {
  text-decoration: underline;
}

li.search-match {
  margin: 2px 0;
  word-wrap: normal;
  white-space: pre;
}

li.search-match::before {
  display: none;
}

li.search-match .search-match-line-number {
  color: var(--color-text-secondary);
  text-align: right;
  vertical-align: top;
  word-break: normal;
  padding: 2px 4px 2px 6px;
  margin-right: 5px;
}

li.search-match:hover {
  background-color: var(--item-hover-color);
}

.tree-outline .devtools-link {
  text-decoration: none;
  display: block;
  flex: auto;
}

li.search-match .search-match-content {
  color: var(--color-text-primary);
}

ol.children.expanded {
  padding-bottom: 4px;
}

.search-match-link {
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 9px;
}

.search-result-qualifier {
  color: var(--color-text-secondary);
}

.search-result-dash {
  color: var(--color-background-elevation-2);
  margin: 0 4px;
}

/*# sourceURL=searchResultsPane.css */
`);
export default styles;

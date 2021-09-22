// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.ax-breadcrumbs-ignored-node {
  font-style: italic;
  opacity: 70%;
}

.ax-breadcrumbs {
  padding-top: 1px;
  margin: 0;
  position: relative;
}

.ax-breadcrumbs .ax-node {
  align-items: center;
  margin-top: 1px;
  min-height: 16px;
  overflow-x: hidden;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ax-breadcrumbs .ax-node span {
  flex-shrink: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ax-breadcrumbs .ax-node .wrapper {
  padding-left: 12px;
  overflow-x: hidden;
}

.ax-breadcrumbs .ax-node::before {
  -webkit-mask-image: var(--image-file-chevrons);
  -webkit-mask-position: 0 0;
  -webkit-mask-size: 30px 10px;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--color-syntax-7);
  content: '';
  text-shadow: none;
  margin-right: -2px;
  height: 12px;
  width: 14px;
  position: absolute;
  display: inline-block;
}

.ax-breadcrumbs .ax-node:not(.parent):not(.children-unloaded)::before {
  background-color: transparent;
}

.ax-breadcrumbs .ax-node.parent::before {
  -webkit-mask-position: -20px 1px;
}

.ax-breadcrumbs .ax-node.no-dom-node {
  opacity: 70%;
}

.ax-breadcrumbs .ax-node.children-unloaded::before {
  -webkit-mask-position: 0 1px;
  width: 13px;
  opacity: 40%;
}

.ax-breadcrumbs .ax-node .selection {
  display: none;
  z-index: -1;
}

.ax-breadcrumbs .ax-node.inspected .selection {
  display: block;
  background-color: var(--color-background-elevation-2);
}

.ax-breadcrumbs .ax-node.inspected:focus .selection {
  background-color: var(--legacy-selection-bg-color);
}

.ax-breadcrumbs .ax-node.parent.inspected:focus::before {
  background-color: var(--color-background);
}

.ax-breadcrumbs .ax-node.inspected:focus {
  background-color: var(--color-primary);
  color: var(--color-background);
}

.ax-breadcrumbs .ax-node:not(.inspected):hover {
  background-color: var(--color-background-elevation-0);
}

.ax-breadcrumbs .ax-node.inspected:focus * {
  color: inherit;
}

.ax-breadcrumbs .ax-node.preselected:not(.inspected) .selection,
.ax-breadcrumbs .ax-node.hovered:not(.inspected) .selection {
  display: block;
  left: 2px;
  right: 2px;
  background-color: var(--item-hover-color);
  border-radius: 5px;
}

.ax-breadcrumbs .ax-node.preselected:not(.inspected):focus .selection {
  border: 1px solid var(--color-primary-variant);
}

@media (forced-colors: active) {
  .ax-value-source-unused,
  .ax-breadcrumbs .ax-node.children-unloaded::before {
    opacity: 100%;
  }

  .ax-breadcrumbs .ax-node.parent::before,
  .ax-breadcrumbs .ax-node.children-unloaded::before {
    forced-color-adjust: none;
    background-color: ButtonText;
  }

  .ax-breadcrumbs .ax-node.parent.inspected::before,
  .ax-breadcrumbs .ax-node.parent.inspected:focus::before {
    background-color: HighlightText;
  }

  .ax-breadcrumbs .ax-node.inspected .selection {
    forced-color-adjust: none;
    background: Highlight !important; /* stylelint-disable-line declaration-no-important */
  }

  .ax-breadcrumbs .ax-node.inspected .wrapper {
    forced-color-adjust: none;
    color: HighlightText;
  }

  .ax-breadcrumbs .ax-node.preselected:not(.inspected) .selection,
  .ax-breadcrumbs .ax-node.hovered:not(.inspected) .selection,
  .ax-breadcrumbs .ax-node.hovered:not(.inspected) .wrapper,
  .ax-breadcrumbs .ax-node:focus-visible:not(.inspected) .wrapper {
    forced-color-adjust: none;
    background-color: Highlight;
    color: HighlightText;
    border-radius: 0;
  }

  .ax-breadcrumbs .ax-node.parent.hovered:not(.inspected)::before,
  .ax-breadcrumbs .ax-node.parent:focus-visible:not(.inspected)::before,
  .ax-breadcrumbs .ax-node.children-unloaded:focus-visible:not(.inspected)::before,
  .ax-breadcrumbs .ax-node.hovered:not(.inspected).children-unloaded::before {
    background-color: HighlightText;
  }
}

/*# sourceURL=axBreadcrumbs.css */
`);
export default styles;

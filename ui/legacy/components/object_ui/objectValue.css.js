// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.value.object-value-node:hover {
  background-color: var(--item-hover-color);
}

.object-value-function-prefix,
.object-value-boolean {
  color: var(--color-syntax-3);
}

.object-value-function {
  font-style: italic;
}

.object-value-function.linkified:hover {
  --override-linkified-hover-background: rgb(0 0 0 / 10%);

  background-color: var(--override-linkified-hover-background);
  cursor: pointer;
}

.-theme-with-dark-background .object-value-function.linkified:hover,
:host-context(.-theme-with-dark-background) .object-value-function.linkified:hover {
  --override-linkified-hover-background: rgb(230 230 230 / 10%);
}

.object-value-number {
  color: var(--color-syntax-3);
}

.object-value-bigint {
  color: var(--color-syntax-6);
}

.object-value-string,
.object-value-regexp,
.object-value-symbol {
  white-space: pre;
  unicode-bidi: -webkit-isolate;
  color: var(--color-syntax-1);
}

.object-value-node {
  position: relative;
  vertical-align: baseline;
  color: var(--color-syntax-7);
  white-space: nowrap;
}

.object-value-with-memory-icon {
  display: inline-flex;
}

.object-value-arraybuffer devtools-icon,
.object-value-dataview devtools-icon,
.object-value-typedarray devtools-icon,
.object-value-webassemblymemory devtools-icon {
  cursor: pointer;
}

.object-value-null,
.object-value-undefined {
  color: var(--color-text-disabled);
}

.object-value-calculate-value-button:hover {
  text-decoration: underline;
}

.object-properties-section-custom-section {
  display: inline-flex;
  flex-direction: column;
}

.-theme-with-dark-background .object-value-number,
:host-context(.-theme-with-dark-background) .object-value-number,
.-theme-with-dark-background .object-value-boolean,
:host-context(.-theme-with-dark-background) .object-value-boolean {
  --override-primitive-dark-mode-color: hsl(252deg 100% 75%);

  color: var(--override-primitive-dark-mode-color);
}

.object-properties-section .object-description {
  color: var(--color-text-secondary);
}

.value .object-properties-preview {
  white-space: nowrap;
}

.name {
  color: var(--color-syntax-2);
  flex-shrink: 0;
}

.object-properties-preview .name {
  color: var(--color-text-secondary);
}

@media (forced-colors: active) {
  .object-value-calculate-value-button:hover {
    forced-color-adjust: none;
    color: Highlight;
  }
}

/*# sourceURL=objectValue.css */
`);
export default styles;

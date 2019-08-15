import {MoeApp} from './moe-app';

export class MoeToolbar {
  savedOverflow = '';

  bindings = {
    toggleBold: this.toggleBold,
    toggleItalic: this.toggleItalic,
    drawLink: this.drawLink,
    toggleHeadingSmaller: this.toggleHeadingSmaller,
    toggleHeadingBigger: this.toggleHeadingBigger,
    drawImage: this.drawImage,
    toggleBlockquote: this.toggleBlockquote,
    toggleOrderedList: this.toggleOrderedList,
    toggleUnorderedList: this.toggleUnorderedList,
    toggleCodeBlock: this.toggleCodeBlock,
    togglePreview: this.togglePreview,
    toggleStrikethrough: this.toggleStrikethrough,
    toggleHeading1: this.toggleHeading1,
    toggleHeading2: this.toggleHeading2,
    toggleHeading3: this.toggleHeading3,
    cleanBlock: this.cleanBlock,
    drawTable: this.drawTable,
    drawHorizontalRule: this.drawHorizontalRule,
    undo: this.undo,
    redo: this.redo,
    toggleSideBySide: this.toggleSideBySide,
    toggleFullScreen: this.toggleFullScreen
  };

  toolbarBuiltInButtons = {
    bold: {
      name: 'bold',
      action: this.toggleBold,
      className: 'fa fa-bold',
      title: 'Bold',
      default: true
    },
    italic: {
      name: 'italic',
      action: this.toggleItalic,
      className: 'fa fa-italic',
      title: 'Italic',
      default: true
    },
    strikethrough: {
      name: 'strikethrough',
      action: this.toggleStrikethrough,
      className: 'fa fa-strikethrough',
      title: 'Strikethrough'
    },
    heading: {
      name: 'heading',
      action: this.toggleHeadingSmaller,
      className: 'fa fa-header',
      title: 'Heading',
      default: true
    },
    'heading-smaller': {
      name: 'heading-smaller',
      action: this.toggleHeadingSmaller,
      className: 'fa fa-header fa-header-x fa-header-smaller',
      title: 'Smaller Heading'
    },
    'heading-bigger': {
      name: 'heading-bigger',
      action: this.toggleHeadingBigger,
      className: 'fa fa-header fa-header-x fa-header-bigger',
      title: 'Bigger Heading'
    },
    'heading-1': {
      name: 'heading-1',
      action: this.toggleHeading1,
      className: 'fa fa-header fa-header-x fa-header-1',
      title: 'Big Heading'
    },
    'heading-2': {
      name: 'heading-2',
      action: this.toggleHeading2,
      className: 'fa fa-header fa-header-x fa-header-2',
      title: 'Medium Heading'
    },
    'heading-3': {
      name: 'heading-3',
      action: this.toggleHeading3,
      className: 'fa fa-header fa-header-x fa-header-3',
      title: 'Small Heading'
    },
    'separator-1': {
      name: 'separator-1'
    },
    code: {
      name: 'code',
      action: this.toggleCodeBlock,
      className: 'fa fa-code',
      title: 'Code'
    },
    quote: {
      name: 'quote',
      action: this.toggleBlockquote,
      className: 'fa fa-quote-left',
      title: 'Quote',
      default: true
    },
    'unordered-list': {
      name: 'unordered-list',
      action: this.toggleUnorderedList,
      className: 'fa fa-list-ul',
      title: 'Generic List',
      default: true
    },
    'ordered-list': {
      name: 'ordered-list',
      action: this.toggleOrderedList,
      className: 'fa fa-list-ol',
      title: 'Numbered List',
      default: true
    },
    'clean-block': {
      name: 'clean-block',
      action: this.cleanBlock,
      className: 'fa fa-eraser fa-clean-block',
      title: 'Clean block'
    },
    'separator-2': {
      name: 'separator-2'
    },
    link: {
      name: 'link',
      action: this.drawLink,
      className: 'fa fa-link',
      title: 'Create Link',
      default: true
    },
    image: {
      name: 'image',
      action: this.drawImage,
      className: 'fa fa-picture-o',
      title: 'Insert Image',
      default: true
    },
    table: {
      name: 'table',
      action: this.drawTable,
      className: 'fa fa-table',
      title: 'Insert Table'
    },
    'horizontal-rule': {
      name: 'horizontal-rule',
      action: this.drawHorizontalRule,
      className: 'fa fa-minus',
      title: 'Insert Horizontal Line'
    },
    'separator-3': {
      name: 'separator-3'
    },
    preview: {
      name: 'preview',
      action: this.togglePreview,
      className: 'fa fa-eye no-disable',
      title: 'Toggle Preview',
      default: true
    },
    'side-by-side': {
      name: 'side-by-side',
      action: this.toggleSideBySide,
      className: 'fa fa-columns no-disable no-mobile',
      title: 'Toggle Side by Side',
      default: true
    },
    fullscreen: {
      name: 'fullscreen',
      action: this.toggleFullScreen,
      className: 'fa fa-arrows-alt no-disable no-mobile',
      title: 'Toggle Fullscreen',
      default: true
    },
    'separator-4': {
      name: 'separator-4'
    },
    guide: {
      name: 'guide',
      action: 'https://simplemde.com/markdown-guide',
      className: 'fa fa-question-circle',
      title: 'Markdown Guide',
      default: true
    },
    'separator-5': {
      name: 'separator-5'
    },
    undo: {
      name: 'undo',
      action: this.undo,
      className: 'fa fa-undo no-disable',
      title: 'Undo'
    },
    redo: {
      name: 'redo',
      action: this.redo,
      className: 'fa fa-repeat no-disable',
      title: 'Redo'
    }
  };

  shortcuts = {
    toggleBold: 'Cmd-B',
    toggleItalic: 'Cmd-I',
    drawLink: 'Cmd-K',
    toggleHeadingSmaller: 'Cmd-H',
    toggleHeadingBigger: 'Shift-Cmd-H',
    cleanBlock: 'Cmd-E',
    drawImage: 'Cmd-Alt-I',
    toggleBlockquote: 'Cmd-\'',
    toggleOrderedList: 'Cmd-Alt-L',
    toggleUnorderedList: 'Cmd-L',
    toggleCodeBlock: 'Cmd-Alt-C',
    togglePreview: 'Cmd-P',
    toggleSideBySide: 'F9',
    toggleFullScreen: 'F11'
  };


  createToolbar(items) {

    if (!items || items.length === 0) {
      return;
    }

    const bar = document.createElement('div');
    bar.className = 'editor-toolbar';

    const toolbarData = {};


    for (let item of items) {

      // 匹配string类型菜单
      if (this.toolbarBuiltInButtons[item] !== undefined) {
        item = this.toolbarBuiltInButtons[item];
      }

      let el;
      if (item === '|') {
        el = this.createSep();
      } else {
        el = this.createIcon(item, true, {});
      }

      // bind events, special for info
      if (item.action) {
        if (typeof item.action === 'function') {
          el.onclick = (e) => {
            e.preventDefault();
            item.action(e);
          };
        } else if (typeof item.action === 'string') {
          el.href = item.action;
          el.target = '_blank';
        }
      }

      toolbarData[item.name || item] = el;
      bar.appendChild(el);
    }

    // Will be fired when the cursor or selection moves, or any change is made to the editor content.
    MoeApp.editor.on('cursorActivity', () => {
      const stat = this.getState(MoeApp.editor);

      for (const key in toolbarData) {
        const el = toolbarData[key];
        if (stat[key]) {
          el.className += ' active';
        } else if (key !== 'fullscreen' && key !== 'side-by-side') {
          el.className = el.className.replace(/\s*active\s*/g, '');
        }
      }
      console.log('cursorActivity');
    });
    const toolbar = document.getElementById('main-container');
    toolbar.parentNode.insertBefore(bar, toolbar);
    return bar;
  }

  private createIcon(options: any, enableTooltips, shortcuts) {
    options = options || {};
    const el = document.createElement('a');
    enableTooltips = enableTooltips === undefined ? true : enableTooltips;

    if (options.title && enableTooltips) {
      el.title = this.createTootlip(options.title, options.action, shortcuts);

      if (this.isMac) {
        el.title = el.title.replace('Ctrl', '⌘');
        el.title = el.title.replace('Alt', '⌥');
      }
    }

    el.tabIndex = -1;
    el.className = options.className;
    return el;
  }

  private createSep() {
    const el = document.createElement('i');
    el.className = 'separator';
    el.innerHTML = '|';
    return el;
  }


  private createTootlip(title: string, action: any, shortcuts: any) {
    let tooltip = title;
    if (action) {
      const actionName = this.getBindingName(action);
      if (shortcuts[actionName]) {
        tooltip += '(' + this.fixShortcut(shortcuts[actionName]) + ')';
      }
    }
    return tooltip;
  }


  private getBindingName(f): string {
    for (const key in this.bindings) {
      if (this.bindings[key] === f) {
        return key;
      }
    }
    return null;
  }


  private fixShortcut(name) {
    if (this.isMac()) {
      name = name.replace('Ctrl', 'Cmd');
    } else {
      name = name.replace('Cmd', 'Ctrl');
    }
    return name;
  }


  private isMac() {
    return false;
  }

  /**
   * Action for toggling bold.
   */
  private toggleBold(editor) {
    this._toggleBlock(editor, 'bold', editor.options.blockStyles.bold);
  }


  /**
   * Action for toggling italic.
   */
  private toggleItalic(editor) {
    this._toggleBlock(editor, 'italic', editor.options.blockStyles.italic);
  }


  /**
   * Action for toggling strikethrough.
   */
  private toggleStrikethrough(editor) {
    this._toggleBlock(editor, 'strikethrough', '~~');
  }

  /**
   * Action for toggling code block.
   */
  private toggleCodeBlock(editor) {
    // const fenceCharsToInsert = editor.options.blockStyles.code;
    //
    // function fencing_line(line) {
    //   /* return true, if this is a ``` or ~~~ line */
    //   if (typeof line !== 'object') {
    //     throw new Error('fencing_line() takes a \'line\' object (not a line number, or line text).  Got: ' + typeof line + ': ' + line);
    //   }
    //   return line.styles && line.styles[2] && line.styles[2].indexOf('formatting-code-block') !== -1;
    // }
    //
    // function token_state(token) {
    //   // base goes an extra level deep when mode backdrops are used, e.g. spellchecker on
    //   return token.state.base.base || token.state.base;
    // }
    //
    // function code_type(cm, lineNum, line, firstTok?, lastTok?) {
    //   /*
    //    * Return "single", "indented", "fenced" or false
    //    *
    //    * cm and line_num are required.  Others are optional for efficiency
    //    *   To check in the middle of a line, pass in firstTok yourself.
    //    */
    //   line = line || cm.getLineHandle(lineNum);
    //   firstTok = firstTok || cm.getTokenAt({
    //     line: lineNum,
    //     ch: 1
    //   });
    //   lastTok = lastTok || (!!line.text && cm.getTokenAt({
    //     line: lineNum,
    //     ch: line.text.length - 1
    //   }));
    //   const types = firstTok.type ? firstTok.type.split(' ') : [];
    //   if (lastTok && token_state(lastTok).indentedCode) {
    //     // have to check last char, since first chars of first line aren"t marked as indented
    //     return 'indented';
    //   } else if (types.indexOf('comment') === -1) {
    //     // has to be after "indented" check, since first chars of first indented line aren"t marked as such
    //     return false;
    //   } else if (token_state(firstTok).fencedChars || token_state(lastTok).fencedChars || fencing_line(line)) {
    //     return 'fenced';
    //   } else {
    //     return 'single';
    //   }
    // }
    //
    // function insertFencingAtSelection(cm, curStart, curEnd, fenceCharsToInsert) {
    //   const startLineSel = curStart.line + 1;
    //   let endLineSel = curEnd.line + 1;
    //   const selMulti = curStart.line !== curEnd.line;
    //   const replStart = fenceCharsToInsert + '\n';
    //   let replEnd = '\n' + fenceCharsToInsert;
    //   if (selMulti) {
    //     endLineSel++;
    //   }
    //   // handle last char including \n or not
    //   if (selMulti && curEnd.ch === 0) {
    //     replEnd = fenceCharsToInsert + '\n';
    //     endLineSel--;
    //   }
    //   this._replaceSelection(cm, false, [replStart, replEnd]);
    //   cm.setSelection({
    //     line: startLineSel,
    //     ch: 0
    //   }, {
    //     line: endLineSel,
    //     ch: 0
    //   });
    // }
    //
    // const cm = editor.codemirror;
    // const curStart = cm.getCursor('start');
    // const curEnd = cm.getCursor('end');
    // const tok = cm.getTokenAt({
    //   line: curStart.line,
    //   ch: curStart.ch || 1
    // }); // avoid ch 0 which is a cursor pos but not token
    // let line = cm.getLineHandle(curStart.line);
    // const isCode = code_type(cm, curStart.line, line, tok);
    // let blockStart;
    // let blockEnd;
    // let lineCount;
    //
    // if (isCode === 'single') {
    //   // similar to some SimpleMDE _toggleBlock logic
    //   const start = line.text.slice(0, curStart.ch).replace('`', '');
    //   const end = line.text.slice(curStart.ch).replace('`', '');
    //   cm.replaceRange(start + end, {
    //     line: curStart.line,
    //     ch: 0
    //   }, {
    //     line: curStart.line,
    //     ch: 99999999999999
    //   });
    //   curStart.ch--;
    //   if (curStart !== curEnd) {
    //     curEnd.ch--;
    //   }
    //   cm.setSelection(curStart, curEnd);
    //   cm.focus();
    // } else if (isCode === 'fenced') {
    //   if (curStart.line !== curEnd.line || curStart.ch !== curEnd.ch) {
    //     // use selection
    //
    //     // find the fenced line so we know what type it is (tilde, backticks, number of them)
    //     for (blockStart = curStart.line; blockStart >= 0; blockStart--) {
    //       line = cm.getLineHandle(blockStart);
    //       if (fencing_line(line)) {
    //         break;
    //       }
    //     }
    //     const fencedTok = cm.getTokenAt({
    //       line: blockStart,
    //       ch: 1
    //     });
    //     const fenceChars = token_state(fencedTok).fencedChars;
    //     let startText;
    //     let startLine;
    //     let endText;
    //     let endLine;
    //     // check for selection going up against fenced lines, in which case we don't want to add more fencing
    //     if (fencing_line(cm.getLineHandle(curStart.line))) {
    //       startText = '';
    //       startLine = curStart.line;
    //     } else if (fencing_line(cm.getLineHandle(curStart.line - 1))) {
    //       startText = '';
    //       startLine = curStart.line - 1;
    //     } else {
    //       startText = fenceChars + '\n';
    //       startLine = curStart.line;
    //     }
    //     if (fencing_line(cm.getLineHandle(curEnd.line))) {
    //       endText = '';
    //       endLine = curEnd.line;
    //       if (curEnd.ch === 0) {
    //         endLine += 1;
    //       }
    //     } else if (curEnd.ch !== 0 && fencing_line(cm.getLineHandle(curEnd.line + 1))) {
    //       endText = '';
    //       endLine = curEnd.line + 1;
    //     } else {
    //       endText = fenceChars + '\n';
    //       endLine = curEnd.line + 1;
    //     }
    //     if (curEnd.ch === 0) {
    //       // full last line selected, putting cursor at beginning of next
    //       endLine -= 1;
    //     }
    //     cm.operation(function() {
    //       // end line first, so that line numbers don't change
    //       cm.replaceRange(endText, {
    //         line: endLine,
    //         ch: 0
    //       }, {
    //         line: endLine + (endText ? 0 : 1),
    //         ch: 0
    //       });
    //       cm.replaceRange(startText, {
    //         line: startLine,
    //         ch: 0
    //       }, {
    //         line: startLine + (startText ? 0 : 1),
    //         ch: 0
    //       });
    //     });
    //     cm.setSelection({
    //       line: startLine + (startText ? 1 : 0),
    //       ch: 0
    //     }, {
    //       line: endLine + (startText ? 1 : -1),
    //       ch: 0
    //     });
    //     cm.focus();
    //   } else {
    //     // no selection, search for ends of this fenced block
    //     let search_from = curStart.line;
    //     if (fencing_line(cm.getLineHandle(curStart.line))) { // gets a little tricky if cursor is right on a fenced line
    //       if (this.code_type(cm, curStart.line + 1) === 'fenced') {
    //         blockStart = curStart.line;
    //         search_from = curStart.line + 1; // for searching for "end"
    //       } else {
    //         blockEnd = curStart.line;
    //         search_from = curStart.line - 1; // for searching for "start"
    //       }
    //     }
    //     if (blockStart === undefined) {
    //       for (blockStart = search_from; blockStart >= 0; blockStart--) {
    //         line = cm.getLineHandle(blockStart);
    //         if (fencing_line(line)) {
    //           break;
    //         }
    //       }
    //     }
    //     if (blockEnd === undefined) {
    //       lineCount = cm.lineCount();
    //       for (blockEnd = search_from; blockEnd < lineCount; blockEnd++) {
    //         line = cm.getLineHandle(blockEnd);
    //         if (fencing_line(line)) {
    //           break;
    //         }
    //       }
    //     }
    //     cm.operation(function() {
    //       cm.replaceRange('', {
    //         line: blockStart,
    //         ch: 0
    //       }, {
    //         line: blockStart + 1,
    //         ch: 0
    //       });
    //       cm.replaceRange('', {
    //         line: blockEnd - 1,
    //         ch: 0
    //       }, {
    //         line: blockEnd,
    //         ch: 0
    //       });
    //     });
    //     cm.focus();
    //   }
    // } else if (isCode === 'indented') {
    //   if (curStart.line !== curEnd.line || curStart.ch !== curEnd.ch) {
    //     // use selection
    //     blockStart = curStart.line;
    //     blockEnd = curEnd.line;
    //     if (curEnd.ch === 0) {
    //       blockEnd--;
    //     }
    //   } else {
    //     // no selection, search for ends of this indented block
    //     for (blockStart = curStart.line; blockStart >= 0; blockStart--) {
    //       line = cm.getLineHandle(blockStart);
    //       if (line.text.match(/^\s*$/)) {
    //         // empty or all whitespace - keep going
    //         continue;
    //       } else {
    //         if (code_type(cm, blockStart, line) !== 'indented') {
    //           blockStart += 1;
    //           break;
    //         }
    //       }
    //     }
    //     lineCount = cm.lineCount();
    //     for (blockEnd = curStart.line; blockEnd < lineCount; blockEnd++) {
    //       line = cm.getLineHandle(blockEnd);
    //       if (line.text.match(/^\s*$/)) {
    //         // empty or all whitespace - keep going
    //         continue;
    //       } else {
    //         if (code_type(cm, blockEnd, line) !== 'indented') {
    //           blockEnd -= 1;
    //           break;
    //         }
    //       }
    //     }
    //   }
    //   // if we are going to un-indent based on a selected set of lines, and the next line is indented too, we need to
    //   // insert a blank line so that the next line(s) continue to be indented code
    //   const nextLine = cm.getLineHandle(blockEnd + 1);
    //   const nextLineLastTok = nextLine && cm.getTokenAt({
    //     line: blockEnd + 1,
    //     ch: nextLine.text.length - 1
    //   });
    //   const nextLineIndented = nextLineLastTok && token_state(nextLineLastTok).indentedCode;
    //   if (nextLineIndented) {
    //     cm.replaceRange('\n', {
    //       line: blockEnd + 1,
    //       ch: 0
    //     });
    //   }
    //
    //   for (let i = blockStart; i <= blockEnd; i++) {
    //     cm.indentLine(i, 'subtract'); // TODO: this doesn't get tracked in the history, so can't be undone :(
    //   }
    //   cm.focus();
    // } else {
    //   // insert code formatting
    //   const noSelAndStartingOfLine = (curStart.line === curEnd.line && curStart.ch === curEnd.ch && curStart.ch === 0);
    //   const selMulti = curStart.line !== curEnd.line;
    //   if (noSelAndStartingOfLine || selMulti) {
    //     insertFencingAtSelection(cm, curStart, curEnd, fenceCharsToInsert);
    //   } else {
    //     this._replaceSelection(cm, false, ['`', '`']);
    //   }
    // }
  }

  /**
   * Action for toggling blockquote.
   */
  private toggleBlockquote(editor) {
    const cm = editor.codemirror;
    this._toggleLine(cm, 'quote');
  }

  /**
   * Action for toggling heading size: normal -> h1 -> h2 -> h3 -> h4 -> h5 -> h6 -> normal
   */
  private toggleHeadingSmaller(editor) {
    const cm = editor.codemirror;
    this._toggleHeading(cm, 'smaller');
  }

  /**
   * Action for toggling heading size: normal -> h6 -> h5 -> h4 -> h3 -> h2 -> h1 -> normal
   */
  private toggleHeadingBigger(editor) {
    const cm = editor.codemirror;
    this._toggleHeading(cm, 'bigger');
  }

  /**
   * Action for toggling heading size 1
   */
  private toggleHeading1(editor) {
    const cm = editor.codemirror;
    this._toggleHeading(cm, undefined, 1);
  }

  /**
   * Action for toggling heading size 2
   */
  private toggleHeading2(editor) {
    const cm = editor.codemirror;
    this._toggleHeading(cm, undefined, 2);
  }

  /**
   * Action for toggling heading size 3
   */
  private toggleHeading3(editor) {
    const cm = editor.codemirror;
    this._toggleHeading(cm, undefined, 3);
  }


  /**
   * Action for toggling ul.
   */
  private toggleUnorderedList(editor) {
    const cm = editor.codemirror;
    this._toggleLine(cm, 'unordered-list');
  }


  /**
   * Action for toggling ol.
   */
  private toggleOrderedList(editor) {
    const cm = editor.codemirror;
    this._toggleLine(cm, 'ordered-list');
  }

  /**
   * Action for clean block (remove headline, list, blockquote code, markers)
   */
  private cleanBlock(editor) {
    const cm = editor.codemirror;
    this._cleanBlock(cm);
  }

  /**
   * Action for drawing a link.
   */
  private drawLink(editor) {
    const cm = editor.codemirror;
    const stat = this.getState(cm);
    const options = editor.options;
    let url = 'http://';
    if (options.promptURLs) {
      url = prompt(options.promptTexts.link);
      if (!url) {
        return false;
      }
    }
    this._replaceSelection(cm, stat.link, options.insertTexts.link, url);
  }

  /**
   * Action for drawing an img.
   */
  private drawImage(editor) {
    const cm = editor.codemirror;
    const stat = this.getState(cm);
    const options = editor.options;
    let url = 'http://';
    if (options.promptURLs) {
      url = prompt(options.promptTexts.image);
      if (!url) {
        return false;
      }
    }
    this._replaceSelection(cm, stat.image, options.insertTexts.image, url);
  }

  /**
   * Action for drawing a table.
   */
  private drawTable(editor) {
    const cm = editor.codemirror;
    const stat = this.getState(cm);
    const options = editor.options;
    this._replaceSelection(cm, stat.table, options.insertTexts.table);
  }

  /**
   * Action for drawing a horizontal rule.
   */
  private drawHorizontalRule(editor) {
    const cm = editor.codemirror;
    const stat = this.getState(cm);
    const options = editor.options;
    this._replaceSelection(cm, stat.image, options.insertTexts.horizontalRule);
  }


  /**
   * Undo action.
   */
  private undo(editor) {
    const cm = editor.codemirror;
    cm.undo();
    cm.focus();
  }


  /**
   * Redo action.
   */
  private redo(editor) {
    const cm = editor.codemirror;
    cm.redo();
    cm.focus();
  }


  /**
   * Toggle side by side preview
   */
  private toggleSideBySide(editor) {
    const cm = editor.codemirror;
    const wrapper = cm.getWrapperElement();
    const preview = wrapper.nextSibling;
    const toolbarButton = editor.toolbarElements['side-by-side'];
    let useSideBySideListener = false;
    if (/editor-preview-active-side/.test(preview.className)) {
      preview.className = preview.className.replace(
        /\s*editor-preview-active-side\s*/g, ''
      );
      toolbarButton.className = toolbarButton.className.replace(/\s*active\s*/g, '');
      wrapper.className = wrapper.className.replace(/\s*CodeMirror-sided\s*/g, ' ');
    } else {
      // When the preview button is clicked for the first time,
      // give some time for the transition from editor.css to fire and the view to slide from right to left,
      // instead of just appearing.
      setTimeout(function() {
        if (!cm.getOption('fullScreen')) {
          this.toggleFullScreen(editor);
        }
        preview.className += ' editor-preview-active-side';
      }, 1);
      toolbarButton.className += ' active';
      wrapper.className += ' CodeMirror-sided';
      useSideBySideListener = true;
    }

    // Hide normal preview if active
    const previewNormal = wrapper.lastChild;
    if (/editor-preview-active/.test(previewNormal.className)) {
      previewNormal.className = previewNormal.className.replace(
        /\s*editor-preview-active\s*/g, ''
      );
      const toolbar = editor.toolbarElements.preview;
      const toolbarDiv = wrapper.previousSibling;
      toolbar.className = toolbar.className.replace(/\s*active\s*/g, '');
      toolbarDiv.className = toolbarDiv.className.replace(/\s*disabled-for-preview*/g, '');
    }

    const sideBySideRenderingFunction = () => {
      preview.innerHTML = editor.options.previewRender(editor.value(), preview);
    };

    if (!cm.sideBySideRenderingFunction) {
      cm.sideBySideRenderingFunction = sideBySideRenderingFunction;
    }

    if (useSideBySideListener) {
      preview.innerHTML = editor.options.previewRender(editor.value(), preview);
      cm.on('update', cm.sideBySideRenderingFunction);
    } else {
      cm.off('update', cm.sideBySideRenderingFunction);
    }

    // Refresh to fix selection being off (#309)
    cm.refresh();
  }


  /**
   * Preview action.
   */
  private togglePreview(editor) {
    const cm = editor.codemirror;
    const wrapper = cm.getWrapperElement();
    const toolbaDiv = wrapper.previousSibling;
    const toolbar = editor.options.toolbar ? editor.toolbarElements.preview : false;
    let preview = wrapper.lastChild;
    if (!preview || !/editor-preview/.test(preview.className)) {
      preview = document.createElement('div');
      preview.className = 'editor-preview';
      wrapper.appendChild(preview);
    }
    if (/editor-preview-active/.test(preview.className)) {
      preview.className = preview.className.replace(
        /\s*editor-preview-active\s*/g, ''
      );
      if (toolbar) {
        toolbar.className = toolbar.className.replace(/\s*active\s*/g, '');
        toolbaDiv.className = toolbaDiv.className.replace(/\s*disabled-for-preview*/g, '');
      }
    } else {
      // When the preview button is clicked for the first time,
      // give some time for the transition from editor.css to fire and the view to slide from right to left,
      // instead of just appearing.
      setTimeout(() => {
        preview.className += ' editor-preview-active';
      }, 1);
      if (toolbar) {
        toolbar.className += ' active';
        toolbaDiv.className += ' disabled-for-preview';
      }
    }
    preview.innerHTML = editor.options.previewRender(editor.value(), preview);

    // Turn off side by side if needed
    const sidebyside = cm.getWrapperElement().nextSibling;
    if (/editor-preview-active-side/.test(sidebyside.className)) {
      this.toggleSideBySide(editor);
    }
  }

  /**
   * Toggle full screen of the editor.
   */
  private toggleFullScreen(editor) {
    // Set fullscreen
    const cm = editor.codemirror;
    cm.setOption('fullScreen', !cm.getOption('fullScreen'));


    // Prevent scrolling on body during fullscreen active
    if (cm.getOption('fullScreen')) {
      this.savedOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = this.savedOverflow;
    }


    // Update toolbar class
    const wrap = cm.getWrapperElement();

    if (!/fullscreen/.test(wrap.previousSibling.className)) {
      wrap.previousSibling.className += ' fullscreen';
    } else {
      wrap.previousSibling.className = wrap.previousSibling.className.replace(/\s*fullscreen\b/, '');
    }


    // Update toolbar button
    const toolbarButton = editor.toolbarElements.fullscreen;

    if (!/active/.test(toolbarButton.className)) {
      toolbarButton.className += ' active';
    } else {
      toolbarButton.className = toolbarButton.className.replace(/\s*active\s*/g, '');
    }


    // Hide side by side if needed
    const sidebyside = cm.getWrapperElement().nextSibling;
    if (/editor-preview-active-side/.test(sidebyside.className)) {
      this.toggleSideBySide(editor);
    }
  }

  private _replaceSelection(cm, active, startEnd, url?) {
    if (/editor-preview-active/.test(cm.getWrapperElement().lastChild.className)) {
      return;
    }

    let text;
    let start = startEnd[0];
    let end = startEnd[1];
    const startPoint = cm.getCursor('start');
    const endPoint = cm.getCursor('end');
    if (url) {
      end = end.replace('#url#', url);
    }
    if (active) {
      text = cm.getLine(startPoint.line);
      start = text.slice(0, startPoint.ch);
      end = text.slice(startPoint.ch);
      cm.replaceRange(start + end, {
        line: startPoint.line,
        ch: 0
      });
    } else {
      text = cm.getSelection();
      cm.replaceSelection(start + text + end);

      startPoint.ch += start.length;
      if (startPoint !== endPoint) {
        endPoint.ch += start.length;
      }
    }
    cm.setSelection(startPoint, endPoint);
    cm.focus();
  }


  private _toggleHeading(cm, direction, size?) {
    // if (/editor-preview-active/.test(cm.getWrapperElement().lastChild.className)) {
    //   return;
    // }
    //
    // const startPoint = cm.getCursor('start');
    // const endPoint = cm.getCursor('end');
    // for (let i = startPoint.line; i <= endPoint.line; i++) {
    //   (function(i) {
    //     let text = cm.getLine(i);
    //     const currHeadingLevel = text.search(/[^#]/);
    //
    //     if (direction !== undefined) {
    //       if (currHeadingLevel <= 0) {
    //         if (direction === 'bigger') {
    //           text = '###### ' + text;
    //         } else {
    //           text = '# ' + text;
    //         }
    //       } else if (currHeadingLevel === 6 && direction === 'smaller') {
    //         text = text.substr(7);
    //       } else if (currHeadingLevel === 1 && direction === 'bigger') {
    //         text = text.substr(2);
    //       } else {
    //         if (direction === 'bigger') {
    //           text = text.substr(1);
    //         } else {
    //           text = '#' + text;
    //         }
    //       }
    //     } else {
    //       if (size === 1) {
    //         if (currHeadingLevel <= 0) {
    //           text = '# ' + text;
    //         } else if (currHeadingLevel === size) {
    //           text = text.substr(currHeadingLevel + 1);
    //         } else {
    //           text = '# ' + text.substr(currHeadingLevel + 1);
    //         }
    //       } else if (size === 2) {
    //         if (currHeadingLevel <= 0) {
    //           text = '## ' + text;
    //         } else if (currHeadingLevel === size) {
    //           text = text.substr(currHeadingLevel + 1);
    //         } else {
    //           text = '## ' + text.substr(currHeadingLevel + 1);
    //         }
    //       } else {
    //         if (currHeadingLevel <= 0) {
    //           text = '### ' + text;
    //         } else if (currHeadingLevel === size) {
    //           text = text.substr(currHeadingLevel + 1);
    //         } else {
    //           text = '### ' + text.substr(currHeadingLevel + 1);
    //         }
    //       }
    //     }
    //
    //     cm.replaceRange(text, {
    //       line: i,
    //       ch: 0
    //     }, {
    //       line: i,
    //       ch: 99999999999999
    //     });
    //   })(i);
    // }
    // cm.focus();
  }


  private _toggleLine(cm, name) {
    // if (/editor-preview-active/.test(cm.getWrapperElement().lastChild.className)) {
    //   return;
    // }
    //
    // const stat = this.getState(cm);
    // const startPoint = cm.getCursor('start');
    // const endPoint = cm.getCursor('end');
    // const repl = {
    //   quote: /^(\s*)\>\s+/,
    //   'unordered-list': /^(\s*)(\*|\-|\+)\s+/,
    //   'ordered-list': /^(\s*)\d+\.\s+/
    // };
    // const map = {
    //   quote: '> ',
    //   'unordered-list': '* ',
    //   'ordered-list': '1. '
    // };
    // for (let i = startPoint.line; i <= endPoint.line; i++) {
    //   (function(i) {
    //     let text = cm.getLine(i);
    //     if (stat[name]) {
    //       text = text.replace(repl[name], '$1');
    //     } else {
    //       text = map[name] + text;
    //     }
    //     cm.replaceRange(text, {
    //       line: i,
    //       ch: 0
    //     }, {
    //       line: i,
    //       ch: 99999999999999
    //     });
    //   })(i);
    // }
    // cm.focus();
  }

  private _toggleBlock(editor, type, startChars, endChars?) {
    if (/editor-preview-active/.test(editor.codemirror.getWrapperElement().lastChild.className)) {
      return;
    }

    endChars = (typeof endChars === 'undefined') ? startChars : endChars;
    const cm = editor.codemirror;
    const stat = this.getState(cm);

    let text;
    let start = startChars;
    let end = endChars;

    const startPoint = cm.getCursor('start');
    const endPoint = cm.getCursor('end');

    if (stat[type]) {
      text = cm.getLine(startPoint.line);
      start = text.slice(0, startPoint.ch);
      end = text.slice(startPoint.ch);
      if (type === 'bold') {
        start = start.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, '');
        end = end.replace(/(\*\*|__)/, '');
      } else if (type === 'italic') {
        start = start.replace(/(\*|_)(?![\s\S]*(\*|_))/, '');
        end = end.replace(/(\*|_)/, '');
      } else if (type === 'strikethrough') {
        start = start.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, '');
        end = end.replace(/(\*\*|~~)/, '');
      }
      cm.replaceRange(start + end, {
        line: startPoint.line,
        ch: 0
      }, {
        line: startPoint.line,
        ch: 99999999999999
      });

      if (type === 'bold' || type === 'strikethrough') {
        startPoint.ch -= 2;
        if (startPoint !== endPoint) {
          endPoint.ch -= 2;
        }
      } else if (type === 'italic') {
        startPoint.ch -= 1;
        if (startPoint !== endPoint) {
          endPoint.ch -= 1;
        }
      }
    } else {
      text = cm.getSelection();
      if (type === 'bold') {
        text = text.split('**').join('');
        text = text.split('__').join('');
      } else if (type === 'italic') {
        text = text.split('*').join('');
        text = text.split('_').join('');
      } else if (type === 'strikethrough') {
        text = text.split('~~').join('');
      }
      cm.replaceSelection(start + text + end);

      startPoint.ch += startChars.length;
      endPoint.ch = startPoint.ch + text.length;
    }

    cm.setSelection(startPoint, endPoint);
    cm.focus();
  }

  private _cleanBlock(cm) {
    if (/editor-preview-active/.test(cm.getWrapperElement().lastChild.className)) {
      return;
    }

    const startPoint = cm.getCursor('start');
    const endPoint = cm.getCursor('end');
    let text;

    for (let line = startPoint.line; line <= endPoint.line; line++) {
      text = cm.getLine(line);
      text = text.replace(/^[ ]*([# ]+|\*|\-|[> ]+|[0-9]+(.|\)))[ ]*/, '');

      cm.replaceRange(text, {
        line,
        ch: 0
      }, {
        line,
        ch: 99999999999999
      });
    }
  }

  /**
   * The state of CodeMirror at the given position.
   */
  private getState(cm, pos?): RetState {
    pos = cm.getCursor('start') || pos;
    const stat = cm.getTokenAt(pos);
    if (!stat.type) {
      return new RetState();
    }

    const types = stat.type.split(' ');

    const ret = new RetState();
    let text;
    for (const data of types) {
      if (data === 'strong') {
        ret.bold = true;
      } else if (data === 'variable-2') {
        text = cm.getLine(pos.line);
        if (/^\s*\d+\.\s/.test(text)) {
          ret['ordered-list'] = true;
        } else {
          ret['unordered-list'] = true;
        }
      } else if (data === 'atom') {
        ret.quote = true;
      } else if (data === 'em') {
        ret.italic = true;
      } else if (data === 'quote') {
        ret.quote = true;
      } else if (data === 'strikethrough') {
        ret.strikethrough = true;
      } else if (data === 'comment') {
        ret.code = true;
      } else if (data === 'link') {
        ret.link = true;
      } else if (data === 'tag') {
        ret.image = true;
      } else if (data.match(/^header(\\-[1-6])?$/)) {
        ret[data.replace('header', 'heading')] = true;
      }
    }
    return ret;
  }

}

export class RetState {
  bold: boolean;
  quote: boolean;
  italic: boolean;
  strikethrough: boolean;
  code: boolean;
  link: boolean;
  image: boolean;
  table: boolean;
}


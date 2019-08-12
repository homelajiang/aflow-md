export class MoeApp {

  public static editMode = 'preview';
  public static lineNumbers: number[];
  public static scrollMap = new Array(2); // 滚动记录器
  public static lineNumberTags;
  public static editor;

  public static config = {
    'debug-mode': false,
    'scale-factor': 1.0,
    'tab-size': 4,
    'edit-mode': 'preview',
    'edit-mode-read': 'read-mode-wide',
    'edit-mode-write': 'write-mode-wide',
    'focus-mode': false,
    'editor-font': 'default',
    'editor-theme': 'base16-light',
    'editor-font-size': 14,
    'editor-line-height': 2,
    'math-mode': true,
    'uml-diagrams': true,
    'auto-reload': 'auto',
    'auto-save': 'disabled',
    'highlight-theme': 'github',
    'render-theme': 'GitHub',
    'custom-render-themes': {},
    'custom-csss': {},
    'inline-breaks': false
  };

}
